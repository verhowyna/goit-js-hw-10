const e={method:"GET",headers:{"x-api-key":"live_A0SuNUhg8wMQnI1OOhVMud2yvj7qOKHJm15onacOsEfEROdx7GcPHjr0e4lpJrkC"}};const t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),d=document.querySelector(".loader"),c=document.querySelector(".error");t.insertAdjacentHTML("afterbegin",'<option class="js-select js-placeholder" value="choose">Select the cat</option>'),d.hidden=!1,t.hidden=!0,fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{t.insertAdjacentHTML("beforeend",e.map((({name:e,id:t})=>`<option class ="js-select" value="${t}">${e}</option>`)).join("")),d.hidden=!0,t.hidden=!1})).catch((e=>console.log(e))),t.addEventListener("change",(function(){n.classList.add("cat-card"),c.hidden=!0,d.hidden=!1,t.hidden=!0,(r=t.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`,e).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>{const c=e[0].url,r=e[0].breeds[0].name,s=e[0].breeds[0].description,o=e[0].breeds[0].temperament;n.innerHTML=function(e,t,n,d){return`<img class="js-cat-img" src="${e}" alt="${t}" width="300">\n    <div class="js-cat-description">\n      <h2>${t}</h2>\n      <p>${n}</p>\n      <h3>Temperament:</h3>\n      <p>${d}</p>\n    </div>`}(c,r,s,o),d.hidden=!0,t.hidden=!1,n.classList.remove("cat-card")})).catch((e=>{console.log("Oops! Something went wrong! Try reloading the page!"),d.hidden=!0,t.hidden=!1,n.classList.add("cat-card")}));var r}));
//# sourceMappingURL=index.15a404d3.js.map
