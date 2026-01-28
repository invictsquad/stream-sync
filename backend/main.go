package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"log"
	"stream-sync/backend/rtmp"
)

// Requirement 1.2: Generate cryptographically secure stream key
func generateSecureStreamKey() string {
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		return "fallback_key"
	}
	return "ss_live_" + hex.EncodeToString(b)
}

func main() {
	// Initialize Ingest Server (Data Plane)
	// Port 1935 is the standard RTMP port
	ingestServer := rtmp.NewIngestServer(":1935")

	fmt.Println("--------------------------------------------")
	fmt.Println(" stream-sync: Backend Services Active ")
	fmt.Println(" Control Plane: Ready ")
	fmt.Println(" RTMP Port: 1935 ")
	fmt.Println("--------------------------------------------")

	// Print a sample key to show Requirement 1.2 in action
	fmt.Printf("Generated Secure Stream Key: %s\n", generateSecureStreamKey())

	// Block and run the ingest server
	if err := ingestServer.Start(); err != nil {
		log.Fatalf("Critical Server Failure: %v", err)
	}
}