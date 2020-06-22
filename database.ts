import { Database } from "./debs.ts";
import { database } from "./configuration.ts";
import { Category } from "./models/index.ts";

const db = new Database('mysql', {...database});

db.link([Category]);