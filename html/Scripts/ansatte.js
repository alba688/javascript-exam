import AnsatteModul from '../Modules/AnsatteModul.js'

const AnsatteSection = document.querySelector("#ansatte-section");
const navnInput = document.getElementById("navn-input");
const stillingInput = document.getElementById("stilling-input");
const avdelingInput = document.getElementById("avdeling-input");
const addBtn = document.getElementById("add-btn");

function printEmployes() {
let htmlTxt = "";
AnsatteModul.getAllEmployes().forEach((ansatt, mIndex) => {
    htmlTxt += `
    <article class="column is-3">
        <div class="card">
            <section class="card-image is-square">
                <img src="../Images/Icons/${ansatt.Bilde}" alt="${ansatt.Alt}">
            </section>
            <section class="card-content">
                <h3>Navn: ${ansatt.Navn}</h3>
                <h3>Stilling: ${ansatt.Stilling}</h3>
                <h3>Avdeling: ${ansatt.Avdeling}</h3>
            </section>
            <footer class="card-footer">
            <div class="card-footer-item">
                <span class="tag is-medium is-danger">
                    Slett
                        <button id="delete-btn" class="delete is-small" value="${mIndex}"></button>
                </span>
            </div>
        </footer>
        </div>
    </article>
    `;
    })
    AnsatteSection.innerHTML = htmlTxt;

    const removeItem = () => {
        document.querySelectorAll("#delete-btn").forEach (button => { // identifies the delete button
            button.addEventListener("click", ( e ) => { // identifies the delete button was clicked
                if (confirm("Hei! Er du helt sikkert du vil slette?")) {
                const employeIndex = button.value; // finds the value (array index) that we added to the button HTML above
                AnsatteModul.deleteItem(employeIndex); // passes that index into the deleteItem function within the Module
                printEmployes(); //runs printMeny again to update HTML on the page to show item was deleted
                }
            })
        })
    
    }
    removeItem(); // remember to initialize :)
   
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