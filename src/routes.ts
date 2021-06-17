import express from 'express';

import PostsController from './controllers/PostsController';
import UsersController from './controllers/UsersController';

const routes = express.Router();

const postsController = new PostsController();
const usersController = new UsersController();

routes.get('/posts', postsController.index);
routes.get('/users', usersController.index);

export default routes;
