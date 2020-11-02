import client from './client';

export const insert = ({ todo, username, rank, type }) =>
  client.post('/api/todo/insert', { todo, username, rank, type });

export const list = () => client.get('/api/todo/');
