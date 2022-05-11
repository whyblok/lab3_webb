export const typeOfDeposit = document.getElementById("type");
export const calcButton = document.getElementById("calc_button");

const terms = document.getElementById("term");
const calcSol = document.getElementById("calc_sol");
const calcSol2 = document.getElementById("calc_sol2");
const contr = document.getElementById("calc_contr");


const refOptions = [
    {months: 6, percent: 10, text: "6 месяцев - 20%"},
    {months: 12, percent: 22, text: "1 год - 22%"},
    {months: 18, percent: 22.5, text: "1,5 года - 15%"},
    {months: 24, percent: 20, text: "2 года - 10%"},
];

const termOptions = [
    {months: 3, percent: 5, text: "3 месяца - 20%"},
    {months: 6, percent: 11, text: "6 месяцев - 22%"},
    {months: 9, percent: 17.25, text: "9 месяцев - 23%"},
    {months: 12, percent: 24, text: "1 год - 24%"},
    {months: 18, percent: 27, text: "1,5 года - 18%"},
    {months: 24, percent: 30, text: "2 года - 15%"},
];

export const onTypeChange = () => {
    let arr = [];
    typeOfDeposit.value === "1" ? arr = refOptions : arr = termOptions;

    while (terms.options.length > 0) {
        terms.remove(0);
    }

    for (let i = 0; i < arr.length; i++) {
        let opt = document.createElement('option');
        opt.value = arr[i].percent;
        opt.innerHTML = `<p>${arr[i].text}</p>`;
        opt.id = `option${i}`;
        terms.appendChild(opt);
    }
}

export const calcTerm = () => {
    let vklad;
    typeOfDeposit.value === "1" ? vklad = "Пополняемый" : vklad = "Срочный";
    if (contr.value) {
        if (contr.value <= 0) {
            calcSol2.innerHTML = "<p style='color: red'> Введите правильную сумму!</p>"
        } else {
            let finalSol = Number(terms.value / 100 * contr.value) + Number(contr.value);
            calcSol.textContent = `По вкладу "${vklad}" на срок и ставку ${terms.options[terms.selectedIndex].textContent}, при сумме вклада ${contr.value}`;
            calcSol2.textContent = `В конце срока вы получите ${finalSol}р.`
        }
    } else {
        calcSol.innerHTML = "<p style='color: red'>Введите сумму вклада!</p>"
        calcSol2.textContent = "";
    }
}

