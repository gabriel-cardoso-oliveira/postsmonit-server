import { Request, Response } from 'express';
import api from '../services/api';

interface User {
  id: number;
  name: string;
  company: {
    name: string;
  };
}

class UsersController {
  async index(request: Request, response: Response) {
    try {
      const { data } = await api.get('users');

      const users = data.map((user: User) => {
        return {
          id: user.id,
          name: user.name,
          company: user.company.name,
        };
      });

      return response.json(users);
    } catch (error) {
      return response.status(500);
    }
  }
}

export default UsersController;
