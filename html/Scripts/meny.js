import MenyModule from '../Modules/MenyModule.js'

const menySection = document.getElementById("meny-section");
const searchBtn = document.querySelector("#search-btn");
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
                </div>
            </article>
        `;
    })
    menySection.innerHTML = htmlTxt;
    console.log(MenyModule.getLength());
}

printMeny();


searchBtn.addEventListener("click", () => {
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
                </div>
            </article>
        `;
    })

    menySection.innerHTML = htmlSearch;
})

cancelBtn.addEventListener("click", printMeny);

addBtn.addEventListener("click", () => {

    let newObj = {
        Bilde: "meny-placeholder.jpeg",
        Navn: navnInput.value,
        Pris: parseInt(prisInput.value),
        Type: typInput.value,
        Beskrivelse: beskInput.value
        };

    MenyModule.addNewItem(newObj);
    printMeny();
})



/* TO USE WITH DELETE FUNCTION IF NECESSARY
<footer class="card-footer">
    <div class="card-footer-item">
        <span class="tag is-medium is-danger">
            Slett
                <button class="delete is-small"></button>
        </span>
    </div>
</footer>
 */