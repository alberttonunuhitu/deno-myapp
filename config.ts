import "https://deno.land/x/dotenv/load.ts";

export const host: string = Deno.env.get("APP_HOST") || "127.0.0.1";
export const port: number = Number(Deno.env.get("APP_PORT")) || 3000;