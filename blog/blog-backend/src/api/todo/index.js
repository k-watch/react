import Router from 'koa-router';
import * as todoCtrl from './todo.ctrl';

const todo = new Router();

todo.post('/insert', todoCtrl.insert);
todo.get('/', todoCtrl.list);

export default todo;
