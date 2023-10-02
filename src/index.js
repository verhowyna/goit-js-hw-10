import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const placeholder = `<option class="js-select js-placeholder" value="choose">Select the cat</option>`;
const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const message = document.querySelector('.error');

select.insertAdjacentHTML("afterbegin", placeholder);

loader.hidden = false;
select.hidden = true;

function createMarkup(arr) {
    return arr.map(({ name, id }) => {
        return `<option value="${id}">${name}</option>`
    }).join("");
}

fetchBreeds()
    .then(data => {
        select.insertAdjacentHTML("beforeend", createMarkup(data));
        loader.hidden = true;
        select.hidden = false
    })
    .catch(err => console.log(err))

select.addEventListener("change", onSelect);

function onSelect() {
    catInfo.classList.add("cat-card");

    message.hidden = true;
    loader.hidden = false;
    select.hidden = true;

    fetchCatByBreed(select.value)
        .then(data => {
            const img = data[0].url;
            const name = data[0].breeds[0].name;
            const descr = data[0].breeds[0].description;
            const temperament = data[0].breeds[0].temperament;

            catInfo.innerHTML = createCard(img, name, descr, temperament);
            loader.hidden = true;
            select.hidden = false;
            catInfo.classList.remove("cat-card");
        })
        .catch(err => {
            Report.failure('Oops! Something went wrong! Try reloading the page!');
           loader.hidden = true;
            select.hidden = false;
            catInfo.classList.add("cat-card");
        })
}

function createCard(img, name, descr, temperament) {
    return `<img class="js-cat-img" src="${img}" alt="${name}">
    <div class="js-cat-description">
      <h2>${name}</h2>
      <p>${descr}</p>
      <h3>Temperament:</h3>
      <p>${temperament}</p>
    </div>`;
}