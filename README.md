# Real-Time-Collaborative-Drawing-Canvas.
A real-time multi-user drawing application that allows multiple users to draw simultaneously on a shared canvas with instant synchronization the system is built using HTML5 Canvas, Node.js, and WebSockets, focusing on low-latency collaboration consistent global state and efficient canvas rendering all without using any external drawing libraries.

1.Real-Time Drawing
Multiple users can draw at the same time
Stroke data is streamed live (not after completion)
Smooth freehand drawing using optimized canvas paths

2.Drawing Tools
Brush with adjustable stroke width
Color selection
Eraser support via canvas compositing

3.Global Undo / Redo
Undo and redo operations affect the shared canvas state
Server-managed operation history ensures consistency
All connected clients stay synchronized

4.Multi-User Awareness
Live cursor position updates
List of online users per room
Unique user identification via WebSocket connections

5.Conflict Resolution
Server acts as the single source of truth
Operations are applied in the order received
Deterministic replay guarantees identical canvas state

## Technical Highlights

1.Canvas Mastery
Direct use of HTML5 Canvas API
Incremental stroke rendering for high-frequency mouse events
Efficient redraw strategy using operation replay

2.Real-Time Architecture
WebSocket-based bidirectional communication
Lightweight JSON serialization for drawing operations
Event broadcasting to minimize latency

3.State Synchronization
Centralized operation history on the server
Deterministic undo/redo using stack-based state management
New clients receive full canvas state on join

## Tech Stack
1.Frontend
HTML5 Canvas
Vanilla JavaScript
CSS

2.Backend
Node.js
Express.js
Socket.io (WebSockets)

 ## Use Cases
Online whiteboards
Collaborative design tools
Interview coding/drawing platforms
Real-time teaching and brainstorming apps
