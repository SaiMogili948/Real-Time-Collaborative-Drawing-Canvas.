## Data Flow
Client → WebSocket → Server → Broadcast → Clients

## Protocol
draw: {from,to,color,size}
undo: global stack pop
redo: global stack push

## Undo/Redo
Single global operation history maintained on server.

## Performance
- Batched stroke segments
- Minimal redraw

## Conflict Resolution
Operation ordering via server timestamp
