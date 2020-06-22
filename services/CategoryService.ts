import { Category } from "../models/index.ts";

export const all = async () => {
  return await Category.all();
};

export const store = async (name: string) => {
  await Category.create({
    name: name.toLowerCase(),
  })
};

export const id = async (id: number) => {
  return await Category.find(id);
}

export const update = async (id: number, name: string) => {
  await Category.where("id", id).update({
    name: name.toLowerCase(),
  });
}

export const destroy = async (id: number) => {
  await Category.deleteById(id);
}
