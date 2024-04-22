import * as schedule from "node-schedule";

export function startSchedule() {

    return schedule.scheduleJob("*/10 * * * * *", function () {
        console.log("작업 실행: 매 10초마다!");
    });
}
