import { Application, AppOptions } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { host, port } from "./config.ts";
import routes from "./routes.ts";

const appOptions: AppOptions = {
  hostname: host,
  port: port,
};

const app = new Application(appOptions);

app.use("/", routes);

await app.run();