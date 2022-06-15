import { info } from "./json.js";
export const days = () => {
    const listDays = document.querySelectorAll('.spent__days');
    let indexDay = 0;
    listDays.forEach(days => {
        days.textContent = info[indexDay].day;
        indexDay++;
    })
}