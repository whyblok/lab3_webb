import css from "../css/index.css"
import html from "../html/main.html"

import swiper from './swipper'

import { calcTerm, onTypeChange, typeOfDeposit, calcButton} from "./calculator";


typeOfDeposit.addEventListener('change', onTypeChange);
calcButton.addEventListener('click', calcTerm);
onTypeChange();