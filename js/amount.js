import { info } from "./json.js";
export const amount = () => {
    const rectList = document.querySelectorAll('.spent__rect');
    const amountList = document.querySelectorAll('.spent__data');
    let index = 0;
    rectList.forEach(rect => {
        const data = info[index].amount;
        rect.style.height = `${data * 2.25}px`;
        amountList[index].textContent = `$${data}`;
        index++;
    })
}