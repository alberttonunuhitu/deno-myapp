import "https://deno.land/x/dotenv/load.ts";

export const host: string = Deno.env.get("APP_HOST") || "127.0.0.1";
export const port: number = Number(Deno.env.get("APP_PORT")) || 3000;

type databaseOptions = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export const database: databaseOptions = {
  host: Deno.env.get("DB_HOST") || "127.0.0.1",
  port: Number(Deno.env.get("DB_PORT")) || 3306,
  username: Deno.env.get("DB_USER") || "",
  password: Deno.env.get("DB_PASSWORD") || "",
  database: Deno.env.get("DB_DATABASE") || "myapp",
};