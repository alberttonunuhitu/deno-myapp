import { Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";

const router = new Router();

router.get("/", () => "Hello World");

export default router;