import Router from 'koa-router';
import auth from './auth/index';
import posts from './posts';
import todo from './todo';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/todo', todo.routes());

// 라우터를 내보냅니다.
export default api;
