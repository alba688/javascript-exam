import MenyModule from '../Modules/MenyModule.js'

const menySection = document.getElementById("meny-section");
const submitBtn = document.querySelector("#submit-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const input = document.querySelector("#input-txt");


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
}

printMeny();


submitBtn.addEventListener("click", () => {
    let htmlSearch = "";

    MenyModule.getByMenyType(input.value).forEach((menyItem) => {
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

cancelBtn.addEventListener("click", printMeny());