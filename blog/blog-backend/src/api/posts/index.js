import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

// post.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
// post.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
// post.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

const post = new Router();

post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
