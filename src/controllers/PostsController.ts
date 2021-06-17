import { Request, Response } from 'express';
import api from '../services/api';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  userName: string;
  company: string;
}

class PostsController {
  async index(request: Request, response: Response) {
    try {
      const { data } = await api.get<Post[]>('posts');

      return response.json(data);
    } catch (error) {
      return response.status(500);
    }
  }
}

export default PostsController;
