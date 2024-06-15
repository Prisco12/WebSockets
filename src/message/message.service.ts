import { Injectable } from '@nestjs/common';
import { Message } from './schemas/message.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageInterface } from './interfaces/message.interface';


@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}
  create(message: MessageInterface) {
    return this.messageModel.create(message);
  }

  async findAll() {
    return await this.messageModel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  // update(id: number, updateMessageDto: UpdateMessageDto) {
  //   return `This action updates a #${id} message`;
  // }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
