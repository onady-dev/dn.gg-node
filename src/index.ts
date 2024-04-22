import "reflect-metadata";
import * as express from "express";
import loaders from "./loaders";
import { AppDataSource } from "./data-source";
import config from "./config";
import Logger from "./loaders/logger";
import { startSchedule } from "./batch";

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        await loaders({ app });
        const port = config.server_port || 5000;
        app.listen(port, () => {
            Logger.info(`Server is running on port ${port}`);
            const job = startSchedule();
            // 필요한 경우 작업 취소
            // job.cancel();
        });
    })
    .catch((error) => Logger.error(`error : ${error}`));
