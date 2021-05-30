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
                <td><button data-price="${element.Profitt}" class="button is-small is-info">Legg til</button></td>
                <td>Solgt: <span id="${element.SpanId}">0</span></td>
            </tr>
        `;

    })

    tableBody.innerHTML = htmlTxt;
}

const setButtonEvent = () => {
    let sales = 0;
    let click1 = 0;
    let click2 = 0;
    let click3 = 0;
    let click4 = 0;
    let click5 = 0;
    let click6 = 0;
    let click7 = 0;
    let click8 = 0;

    document.querySelectorAll("button").forEach ((button, index) => {
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

        button.addEventListener("click", () => {
            switch (index) {
                case 0:
                    click1 ++;
                    document.getElementById(index).innerHTML = click1;
                    break;
                case 1:
                    click2 ++;
                    document.getElementById(index).innerHTML = click2;
                    break;
                case 2:
                    click3 ++;
                    document.getElementById(index).innerHTML = click3;
                    break;
                case 3:
                    click4 ++;
                    document.getElementById(index).innerHTML = click4;
                    break;
                case 4:
                    click5 += 1;
                    document.getElementById(index).innerHTML = click5;
                    break;
                case 5:
                    click6 += 1;
                    document.getElementById(index).innerHTML = click6;
                    break;
                case 6:
                    click7 += 1;
                    document.getElementById(index).innerHTML = click7;
                    break;
                case 7:
                    click8 += 1;
                    document.getElementById(index).innerHTML = click8;
                    break;
            };

        });
    })
}

salgDiagram();
setButtonEvent();
