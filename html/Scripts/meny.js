import MenyModule from '../Modules/MenyModule.js'

const menySection = document.getElementById("meny-section");

let htmlTxt = "";

MenyModule.getAllMeny().forEach(meny => {
    htmlTxt += `
        <article class="column is-4">
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