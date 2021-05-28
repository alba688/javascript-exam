import employeModul from '../Modules/AnsatteModul.js'

const employeSection = document.querySelector("#employe-section");
const nameInput = document.getElementById("name-input");
const positionInput = document.getElementById("position-input");
const departmentInput = document.getElementById("department-input");
const addBtn = document.getElementById("add-btn");

function printEmployes() {
let htmlTxt = "";
employeModul.getAllEmployes().forEach((employe, mIndex) => {
    htmlTxt += `
    <article class="column is-3">
        <div class="card">
            <section class="card-image is-square">
                <img src="../Images/Icons/${employe.Bilde}">
            </section>
            <section class="card-content">
                <h3>Navn: ${employe.Navn}</h3>
                <h3>Stilling: ${employe.Stilling}</h3>
                <h3>Avdeling: ${employe.Avdeling}</h3>
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
    employeSection.innerHTML = htmlTxt;

    const removeItem = () => {
        document.querySelectorAll("#delete-btn").forEach (button => { // identifies the delete button
            button.addEventListener("click", ( e ) => { // identifies the delete button was clicked
                if (confirm("Hei! Er du helt sikkert du vil slette?")) {
                const employeIndex = button.value; // finds the value (array index) that we added to the button HTML above
                employeModul.deleteItem(employeIndex); // passes that index into the deleteItem function within the Module
                printEmployes(); //runs printMeny again to update HTML on the page to show item was deleted
                }
            })
        })
    
    }
    removeItem(); // remember to initialize :)
   
}


printEmployes();

addBtn.addEventListener("click", () => {

    let nameValue = nameInput.value;
    let positionValue = positionInput.value;
    let departmentValue = departmentInput.value;

    let newObj = {
        Bilde: "ansatt.png",
        Navn: nameValue,
        Stilling: positionValue,
        Avdeling: departmentValue
    };

    employeModul.addNewEmploye(newObj);
    printEmployes();
})