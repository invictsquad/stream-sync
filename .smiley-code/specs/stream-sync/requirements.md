# Requirements Document

## Introduction

**stream-sync** is a live streaming platform developed in Go, designed to enable content creators (influencers) to broadcast video content to an audience. The system facilitates the connection between professional broadcasting software, specifically OBS Studio, and the platform's servers by generating unique streaming credentials (RTMP URLs and Stream Keys).

## Glossary

- **stream-sync**: The name of the live streaming platform.
- **Influencer**: A registered user of the platform who intends to broadcast live content.
- **OBS Studio**: Open Broadcaster Software, a third-party application used to encode and transmit video.
- **RTMP (Real-Time Messaging Protocol)**: A TCP-based protocol used for streaming audio, video, and data over the internet.
- **Stream Key**: A unique, private alphanumeric string used to authenticate a specific broadcast.
- **Ingest URL**: The specific server address where OBS Studio sends the video data.
- **Dashboard**: The private user interface where influencers manage their stream settings.

## Requirements

### Requirement 1: Stream Credential Generation

**User Story:** As an influencer, I want the system to generate a unique stream key and ingest URL, so that I can configure my broadcasting software (OBS Studio) to connect to the platform.

#### Acceptance Criteria

1. **WHEN** the influencer accesses the streaming dashboard, **THE** system **SHALL** display a unique RTMP Ingest URL.
2. **WHEN** the influencer requests a new stream identity, **THE** system **SHALL** generate a unique, cryptographically secure alphanumeric Stream Key.
3. **IF** the influencer clicks the "Reset Key" button, **THEN THE** system **SHALL** invalidate the previous key and generate a new one immediately.
4. **WHILE** the Stream Key is displayed on the dashboard, **THE** system **SHALL** mask the characters by default to prevent accidental exposure.

### Requirement 2: Stream Authentication and Connection

**User Story:** As an influencer, I want the platform to validate my credentials when I start streaming from OBS, so that only authorized users can broadcast to my channel.

#### Acceptance Criteria

1. **IF** the Stream Key provided by OBS Studio matches the key stored in the database, **THEN THE** system **SHALL** accept the incoming video data stream.
2. **IF** the Stream Key is invalid or expired, **THEN THE** system **SHALL** reject the connection and return an "Unauthorized" error to the broadcasting client.
3. **WHILE** a stream is actively transmitting data, **THE** system **SHALL** lock the Stream Key to prevent other concurrent connections using the same credentials.

### Requirement 3: Real-time Stream Status Monitoring

**User Story:** As an influencer, I want the system to detect when my broadcast starts and ends, so that the platform can update my channel status for viewers.

#### Acceptance Criteria

1. **WHEN** the system successfully begins receiving data packets from OBS Studio, **THE** system **SHALL** update the channel status to "Live" within 2 seconds.
2. **WHILE** the system is receiving a valid data stream, **THE** system **SHALL** calculate and display the current bitrate and resolution on the influencer's dashboard.
3. **WHEN** the connection with OBS Studio is terminated, **THE** system **SHALL** update the channel status to "Offline" within 10 seconds.

### Requirement 4: User Dashboard Functionality

**User Story:** As an influencer, I want easy access to copy my credentials, so that I can quickly set up my live stream without manual typing errors.

#### Acceptance Criteria

1. **WHEN** the influencer clicks the "Copy" button next to the RTMP URL, **THE** system **SHALL** copy the full URL string to the user's clipboard.
2. **WHEN** the influencer clicks the "Copy" button next to the Stream Key, **THE** system **SHALL** copy the unmasked key string to the user's clipboard.
3. **WHERE** the user's browser does not support clipboard access, **THE** system **SHALL** display a visible notification instructing the user to select and copy the text manually.

### Requirement 5: Data Integrity and Concurrency (Go Backend)

**User Story:** As a system administrator, I want the backend to handle multiple incoming streams simultaneously using Go's concurrency model, so that the platform remains stable during high traffic.

#### Acceptance Criteria

1. **THE** system **SHALL** utilize Go routines to handle each incoming RTMP connection independently.
2. **IF** the number of concurrent streams exceeds the server's pre-defined capacity, **THEN THE** system **SHALL** queue or redirect new connection requests to an available edge node.
3. **WHILE** a stream is active, **THE** system **SHALL** log connection metadata (IP address, duration, and data throughput) for security auditing.