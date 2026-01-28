package rtmp

import (
	"fmt"
	"log"
	"net"
	"sync"
	"time"

	"stream-sync/backend/models"
)

// IngestServer implements Requirement 5 (Concurrency and Data Integrity)
type IngestServer struct {
	Addr            string
	activeSessions  sync.Map // Requirement 2.3: Locking mechanism
	sessionLogs     chan models.StreamSession
}

func NewIngestServer(addr string) *IngestServer {
	return &IngestServer{
		Addr:        addr,
		sessionLogs: make(chan models.StreamSession, 100),
	}
}

// Start launches the Go routine-based TCP listener
func (s *IngestServer) Start() error {
	listener, err := net.Listen("tcp", s.Addr)
	if err != nil {
		return err
	}
	defer listener.Close()

	fmt.Printf("[RTMP] Ingest Server starting on %s\n", s.Addr)

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Printf("Connection error: %v", err)
			continue
		}

		// Requirement 5.1: Go routines for each connection
		go s.handleHandshake(conn)
	}
}

func (s *IngestServer) handleHandshake(conn net.Conn) {
	defer conn.Close()
	
	// Simulation of RTMP Authentication Logic (Requirement 2.1 & 2.2)
	// In a real scenario, we'd read the RTMP chunks here
	remoteAddr := conn.RemoteAddr().String()
	log.Printf("New connection attempt from %s", remoteAddr)

	// Mock Stream Key extraction
	streamKey := "ss_live_example_key" 

	// Requirement 2.3: Lock check
	if _, loaded := s.activeSessions.LoadOrStore(streamKey, remoteAddr); loaded {
		log.Printf("Unauthorized: Stream key %s already in use", streamKey)
		return
	}
	defer s.activeSessions.Delete(streamKey)

	// Requirement 3.1: Mark Live
	s.updateChannelStatus(streamKey, "LIVE")
	
	// Keep connection open for data processing
	s.processData(conn, streamKey)

	// Requirement 3.3: Graceful Offline (10s delay simulation)
	time.Sleep(10 * time.Second)
	s.updateChannelStatus(streamKey, "OFFLINE")
}

func (s *IngestServer) processData(conn net.Conn, key string) {
	// Logic for Requirement 3.2: Bitrate calculation
	// and Requirement 5.3: Session logging
	buffer := make([]byte, 4096)
	for {
		n, err := conn.Read(buffer)
		if err != nil {
			break
		}
		// In a production app, pass n (bytes) to a metric aggregator
		_ = n 
	}
}

func (s *IngestServer) updateChannelStatus(key string, status string) {
	fmt.Printf("[MONITOR] Channel for key %s is now %s\n", key, status)
}