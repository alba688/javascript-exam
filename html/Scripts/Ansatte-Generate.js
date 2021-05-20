import AnsatteModul from '../Modules/AnsatteModul.js'

const AnsatteSection = document.querySelector("#ansatte-section");

let htmlTxt = "";

AnsatteModul.getAllEmployes().forEach(ansatt => {
    htmlTxt += `
    <article class="column is-4">
        <div class="card">
            <section class="card-image">
                <img src="images/${ansatt.Bilde}">
            </section>
            <section class="card-content">
                <h3>Navn: ${ansatt.Navn}</h3>
                <h3>Stilling: ${ansatt.Stilling}</h3>
                <h3>Avdeling: ${ansatt.Avdeling}</h3>
            </section>
        </div>
    </article>
`;
    
});

AnsatteSection.innerHTML = htmlTxt;