// socketUtils.ts
import { Server } from 'socket.io';

let io: Server | null = null;

export const setIo = (socketServer: Server) => {
  io = socketServer;
};

export const getIo = () => {
  if (!io) {
    throw new Error('Socket.IO not initialized');
  }
  return io;
};
