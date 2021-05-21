import MenyModule from '../Modules/MenyModule.js'

const menySection = document.getElementById("meny-section");
const submitBtn = document.querySelector("#submit-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const input = document.querySelector("#input-txt");
const navnInput = document.getElementById("navn-input");
const typInput = document.getElementById("typ-input");
const prisInput = document.getElementById("pris-input");
const beskInput = document.getElementById("info-input");
const addBtn = document.getElementById("add-btn");

function printMeny(){
    let htmlTxt = "";
    MenyModule.getAllMeny().forEach(meny => {
        htmlTxt += `
            <article class="column is-3">
                <div class="card">
                    <section class="card-image">
                        <img src="../Images/Menu/${meny.Bilde}">
                    </section>
                    <section class="card-content">
                        <h1 class="title">${meny.Navn}</h3>
                        <h2 class="subtitle is-4">${meny.Pris} kr</p>
                        <p class="is-size-6">${meny.Beskrivelse}</p>
                    </section>
                    <footer class="card-footer">
                        <div class="card-footer-item">
                            <span class="tag is-medium is-danger">
                                Slett
                                <button class="delete is-small"></button>
                            </span>
                        </div>
                    </footer>
                </div>
            </article>
        `;
    })
    menySection.innerHTML = htmlTxt;
}

printMeny();


submitBtn.addEventListener("click", () => {
    let htmlSearch = "";

    MenyModule.getByCategory(input.value).forEach((menyItem) => {
        
        htmlSearch += `
            <article class="column is-3">
                <div class="card">
                    <section class="card-image">
                        <img src="../Images/Menu/${menyItem.Bilde}">
                    </section>
                    <section class="card-content">
                        <h1 class="title">${menyItem.Navn}</h3>
                        <h2 class="subtitle is-4">${menyItem.Pris} kr</p>
                        <p class="is-size-6">${menyItem.Beskrivelse}</p>
                    </section>
                    <footer class="card-footer">
                        <div class="card-footer-item">
                            <span class="tag is-medium is-danger">
                                Slett
                                <button class="delete is-small"></button>
                            </span>
                        </div>
                    </footer>
                </div>
            </article>
        `;
    })

    menySection.innerHTML = htmlSearch;
})

cancelBtn.addEventListener("click", printMeny);

addBtn.addEventListener("click", () => {
    
    let navnValue = navnInput.value;
    let typValue = typInput.value;
    let prisValue = parseInt(prisInput.value);
    let beskValue = beskInput.value;

    let newObj = {
        Bilde: "meny-placeholder.jpeg",
        Navn: navnValue,
        Pris: prisValue,
        Type: typValue,
        Beskrivelse: beskValue
        };

    MenyModule.addNewItem(newObj);
    printMeny();
})



/*
addBtn.addEventListener("click", () => {
    let htmlAdd = "";
    let navnValue = navnInput.value;
    let typValue = typInput.value;
    let prisValue = parseInt(prisInput.value);
    let beskValue = beskInput.value;

    htmlAdd += `
        <article class="column is-3">
        <div class="card">
            <section class="card-image">
                <img src="../Images/Menu/meny-placeholder.jpeg">
            </section>
            <section class="card-content">
                <h1 class="title">${navnValue}</h3>
                <h2 class="subtitle is-4">${prisValue} kr</p>
                <p class="is-size-6">${beskValue}</p>
            </section>
        </div>
        </article>
    `;
    menySection.innerHTML = htmlAdd;
})
*/
