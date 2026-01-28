package models

import (
	"time"
)

// StreamCredential handles Requirement 1.2 & 2.1
type StreamCredential struct {
	UserID       string    `json:"user_id"`
	StreamKey    string    `json:"stream_key"` // Hash stored in real DB
	IngestURL    string    `json:"ingest_url"`
	IsActive     bool      `json:"is_active"`
	LastUpdateAt time.Time `json:"last_update_at"`
}

// StreamSession handles Requirement 3.2 & 5.3
type StreamSession struct {
	SessionID  string    `json:"session_id"`
	UserID     string    `json:"user_id"`
	StartTime  time.Time `json:"start_time"`
	IPAddress  string    `json:"ip_address"`
	Bitrate    int       `json:"bitrate_kbps"`
	Resolution string    `json:"resolution"`
	FPS        int       `json:"fps"`
}