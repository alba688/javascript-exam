import MenyModule from '../Modules/MenyModule.js'

const tableBody = document.querySelector("#table-body");
const salgSpan = document.querySelector("#salg-span");
const utgiftSpan = document.querySelector("#profit-span");
const krSpan = document.querySelector("#kr-span");

const salgDiagram = () => {
    let htmlTxt = "";

    MenyModule.getAllMeny().forEach( element => {
        htmlTxt +=`
            <tr>
                <td>${element.Navn}</td>
                <td>${element.Pris}</td>
                <td>${element.Profitt}</td>
                <td><button data-price="${element.Profitt}" class="button is-info">Legg til</button></td>
            </tr>
        `;

    })

    tableBody.innerHTML = htmlTxt;
}

const setButtonEvent = () => {
    let sales = 0;

    document.querySelectorAll("button").forEach (button => {
        button.addEventListener("click", (e) => {
            sales += parseInt(e.currentTarget.dataset.price);
            salgSpan.innerHTML = sales;
            utgiftSpan.innerHTML = (sales - 5000);

            if (sales >= 5000) {
                utgiftSpan.style.color = "#32CD32";
                krSpan.style.color = "#32CD32";
            }
            else if (sales >= 3000) {
                utgiftSpan.style.color = "#FFDF00";
                krSpan.style.color = "#FFDF00";
            }
            else if (sales >= 1500) {
                utgiftSpan.style.color = "orange";
                krSpan.style.color = "orange";
            }
            else {
                utgiftSpan.style.color = "red";
                krSpan.style.color = "red";
            }
        })
    })
}

salgDiagram();
setButtonEvent();
