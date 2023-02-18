import "./loadEnvironment";
import startServer from "./server/startServer";

const port = process.env.PORT ?? 4001;

startServer(+port);