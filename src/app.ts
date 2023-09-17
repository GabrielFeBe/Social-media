import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import router from './router';
import ErrorMiddleware from './middleware/ErrorMiddleware';
import { setIo } from './lib/SocketUtils';

// import path from 'path';

// const uploadsDirectory = path.resolve(__dirname, '../uploads');

class App {
  public app: express.Express;

  private server: http.Server;

  public io:Server;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.server = http.createServer(this.app); // Crie o servidor HTTP
    this.io = new Server(this.server, {
      cors: {
        origin: 'http://localhost:3000', // Substitua pela origem do seu frontend
        methods: ['GET', 'POST'], // Métodos permitidos
      },
    });
    this.app.use(express.json());
    this.ioConnection();
    setIo(this.io);
    // this.app.use('/uploads', express.static(uploadsDirectory));
    this.routes();
    this.app.get('/', (_req, res) => res.status(200).send('social media'));
    this.app.use(ErrorMiddleware.handler);
  }

  private routes(): void {
    this.app.use(router);
  }

  private ioConnection() {
    this.io.on('connection', (socket) => {
      console.log('Um cliente se conectou ao Socket.IO.');
    
      // Lógica do Socket.IO aqui
    
      socket.on('disconnect', () => {
        console.log('Um cliente se desconectou do Socket.IO.');
      });
    });
  }

  public start(PORT: string | number) {
    this.server.listen({
      port: PORT,
      host: '0.0.0.0',
    }, () => console.log(
      `Server is running on PORT: ${PORT}`,
    ));
  }
}

export default App;