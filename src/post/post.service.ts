import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from './dto/post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly _postRepository: Repository<Post>,
  ) {}

  async create(post: PostDto): Promise<Post> {
    const createdPost = this._postRepository.create({
      ...post,
      createdOn: new Date().toISOString(),
      updatedOn: new Date().toISOString(),
      deletedOn: new Date().toISOString(),
    });

    return await this._postRepository.save(createdPost);
  }

  async get(id: number): Promise<Post> {
    const post = await this._postRepository.findOneBy({ id });
    return post;
  }

  async getMany(): Promise<Post[]> {
    const posts = await this._postRepository.find();
    return posts;
  }
}
