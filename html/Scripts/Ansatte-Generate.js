import AnsatteModul from '../Modules/AnsatteModul.js'

const AnsatteSection = document.querySelector("#ansatte-section");

let htmlTxt = "";

AnsatteModul.getAllEmployes().forEach(ansatt => {
    htmlTxt += `
    <article class="column">
        <div class="card">
            <section class="card-image">
                <img src="images/${ansatt.Bilde}">
            </section>
            <section class="card-content">
                <h3>${ansatt.Navn}</h3>
                <h3>${ansatt.Stilling}</h3>
                <h3>${ansatt.Avdeling}</h3>
            </section>
        </div>
    </article>
`;
    
});

AnsatteSection.innerHTML = htmlTxt;