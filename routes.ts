import { Router } from "./debs.ts";
import { CategoryHandler } from "./handlers/index.ts";

const router = new Router();

router.get("", async () => "Hello World");

router.get("categories", CategoryHandler.all);
router.post("categories", CategoryHandler.store);
router.get("categories/:id", CategoryHandler.id);
router.put("categories/:id", CategoryHandler.update);
router.delete("categories/:id", CategoryHandler.destory);

export default router;