import {
  Body,
  Controller,
  Post,
  BadRequestException,
  ValidationPipe,
  UsePipes,
  Get,
  Param,
  HttpStatus,
  ParseUUIDPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly _postSrv: PostService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() post: PostDto) {
    const createdPost = await this._postSrv.create(post);

    if (!createdPost) {
      return new BadRequestException();
    }

    return { message: 'SUCCESS', status: HttpStatus.CREATED };
  }

  @Get('/:id')
  async get(@Param('id', ParseIntPipe) id: number) {
    const post = await this._postSrv.get(id);

    if (!post) {
      throw new BadRequestException();
    }

    return post;
  }

  @Get('')
  async getMany() {
    return await this._postSrv.getMany();
  }
}
