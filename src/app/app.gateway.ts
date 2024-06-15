import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { log } from 'console';
import { Server, Socket } from 'socket.io';
import { MessageInterface } from 'src/message/interfaces/message.interface';
import { MessageService } from 'src/message/message.service';




@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['X-API-TOKEN'],
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor( private readonly messageService: MessageService){}
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: MessageInterface): void {
    payload.clientId = client.id
    this.messageService.create(payload)
    this.server.emit('msgToClient', payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  async handleConnection(client: Socket) {
    const messages = await this.messageService.findAll()
    console.log(messages)
    client.emit('getOldMessages', messages)
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
