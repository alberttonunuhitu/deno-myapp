import { Context } from "../debs.ts";
import { CategoryService } from "../services/index.ts";

export const all = async () => {
  return await CategoryService.all();
}

export const store = async (context: Context) => {
  await CategoryService.store(context.req.body.name);

  context.res.setStatus(201);

  return true;
}

export const id = async (context: Context) => {
  return await CategoryService.id(Number(context.req.params.id));
}

export const update = async (context: Context) => {
  await CategoryService.update(
    Number(context.req.params.id),
    context.req.body.name
  );

  return true;
}

export const destory = async (context: Context) => {
  await CategoryService.destroy(Number(context.req.params.id));

  return true;
}