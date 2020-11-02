import Joi from '@hapi/joi';
import Todo from '../../models/todo';

export const insert = async (ctx) => {
  const schema = Joi.object().keys({
    todo: Joi.string().min(1).max(24).required(),
    username: Joi.string().min(1).required(),
    rank: Joi.number().required(),
    type: Joi.number().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { todo, username, rank, type } = ctx.request.body;
  try {
    const todoInsert = new Todo({ todo, username, rank, type });

    await todoInsert.save();
    ctx.body = todoInsert;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  try {
    const todos = await Todo.find().exec();
    ctx.body = todos;
  } catch (e) {
    ctx.throw(500, e);
  }
};
