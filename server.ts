import { Application, AppOptions } from "./debs.ts";
import { host, port } from "./configuration.ts";
import routes from "./routes.ts";
import "./database.ts";

const appOptions: AppOptions = {
  hostname: host,
  port: port,
};

const app = new Application(appOptions);

app.use("/", routes);

await app.run();