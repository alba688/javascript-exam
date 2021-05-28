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
    MenyModule.getAllMeny().forEach((meny, mIndex) => {
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
                                    <button id="delete-btn" class="delete is-small" value="${mIndex}"></button>
                            </span>
                        </div>
                    </footer>
                </div>
            </article>
        `;
    })
    menySection.innerHTML = htmlTxt;
    console.log(MenyModule.getLength());

    // add this function within the function that prints into from JS to HTML
    const removeItem = () => {
        document.querySelectorAll("#delete-btn").forEach (button => { // identifies the delete button
            button.addEventListener("click", ( e ) => { // identifies the delete button was clicked
                if (confirm("Hei! Er du helt sikkert du vil slette?")) {
                    const itemIndex = button.value; // finds the value (array index) that we added to the button HTML above
                    MenyModule.deleteItem(itemIndex); // passes that index into the deleteItem function within the Module
                    printMeny(); //runs printMeny again to update HTML on the page to show item was deleted
                }
            })
        })
    
    }
    removeItem(); // remember to initialize :)



}

printMeny();


searchBtn.addEventListener("click", () => {
    let htmlSearch = "";

    MenyModule.getByCategory(input.value).forEach(menyItem => {
        
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