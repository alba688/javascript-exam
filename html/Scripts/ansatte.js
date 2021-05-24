import AnsatteModul from '../Modules/AnsatteModul.js'

const AnsatteSection = document.querySelector("#ansatte-section");
const navnInput = document.getElementById("navn-input");
const stillingInput = document.getElementById("stilling-input");
const avdelingInput = document.getElementById("avdeling-input");
const addBtn = document.getElementById("add-btn");

function printEmployes() {
let htmlTxt = "";
AnsatteModul.getAllEmployes().forEach(ansatt => {
    htmlTxt += `
    <article class="column is-3">
        <div class="card">
            <section class="card-image is-square">
                <img src="../Images/Icons/${ansatt.Bilde}">
            </section>
            <section class="card-content">
                <h3>Navn: ${ansatt.Navn}</h3>
                <h3>Stilling: ${ansatt.Stilling}</h3>
                <h3>Avdeling: ${ansatt.Avdeling}</h3>
            </section>
        </div>
    </article>
    `;
    })
    AnsatteSection.innerHTML = htmlTxt;
}

printEmployes();

addBtn.addEventListener("click", () => {

    let navnValue = navnInput.value;
    let stillingValue = stillingInput.value;
    let avdelingValue = avdelingInput.value;

    let newObj = {
        Bilde: "ansatt.png",
        Navn: navnValue,
        Stilling: stillingValue,
        Avdeling: avdelingValue
    };

    AnsatteModul.addNewEmploye(newObj);
    printEmployes();
})