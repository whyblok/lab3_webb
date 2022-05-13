import {css} from '../css/index.css';
import {swiper} from './swiper';
import {api} from './axios/hh_api';
const buttonLoadVacancy = document.getElementById('load_vacancy');
const vacancyId = document.getElementById('vacancyId');
const vacancy_amount = document.getElementById('vacancy_amount');
const vacancy = document.getElementById('vacancy');
let vacancyiess = document.createElement('div');
let innerHTML = "";

import {typeOfDeposit, onTypeChange, calcButton, calcTerm, setListener} from './calc';
typeOfDeposit.addEventListener('change', onTypeChange);
calcButton.addEventListener('click', calcTerm);
onTypeChange();

const loadVacancies = () => {
    vacancy.innerHTML = "";
    innerHTML = "";
    api.getVacancy(vacancyId.value, vacancy_amount.value).then(data => {
        data.items.map(item => {
            if (item.salary)
                innerHTML += `<p><a target="_blank" href="https://novosibirsk.hh.ru/vacancy/${item.id}">${item.name}. Зарплата: ${item.salary.from} ${item.salary.currency}</a></p>`
            else
                innerHTML += `<p><a target="_blank" href="https://novosibirsk.hh.ru/vacancy/${item.id}">${item.name}</a></p>`
        });
        console.log(data)
        vacancyiess.innerHTML = innerHTML;
        vacancy.appendChild(vacancyiess);
        console.log(innerHTML);

    })

    console.log(vacancyId.value)
};

buttonLoadVacancy.addEventListener("click", loadVacancies);