import stederArray from '../Modules/StederModule.js'

const stederSection = document.getElementById("steder-section")


    let htmlTxt = "";

    stederArray.forEach(steder => {
        htmlTxt += `
        <section class="columns mb-4">
            <article class="column card is-8 m-4">
                <div class="columns">
                    <div class="column card-image is-one-half">
                        <img src="${steder.Bilde}" alt="${steder.Alt}">
                    </div>
                    <div class="column card-content is-one-half">
                        <h1 class="title">Gylden Pizza ${steder.Lokasjon}</h3>
                        <h2 class="subtitle is-4">Address: ${steder.LokasjonAdresse}</p>
                            <p class="is-size-6">Telefon: ${steder.Telefon}</p>
                            <p class="is-size-6">Åpningstider: ${steder.Tider}</p>
                        <br>
                    </div>
                </div>
            </article>
            <article class="column is-4">
                <iframe src="${steder.LokasjonLink}" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </article>
        </section>
    `;
    });
    stederSection.innerHTML = htmlTxt;


    /*
    `
        <article class="column is-3">
            <div class="card">
                <h2 class="title has-text-centered mt-4">${steder.Lokasjon}</h2>
                <section class="card-image">
                    <img src="${steder.Bilde}" alt="${steder.Alt}">
                </section>
                <section>
                    <a class="icon-text" href="${steder.LokasjonLink}">
                        <span>
                            <img class="image is-48x48 is-rounded" src="${steder.LokasjonBilde}">
                        </span>
                        <span>
                            ${steder.LokasjonAdresse}
                        </span>
                    </a>
                </section>
                <section class="card-content">
                    <h2 class="has-text-centered">Åpningstider: ${steder.Tider}</h2>
                </section>
                    <section>
                        <h2 class="has-text-centered">Telefon: ${steder.Telefon}</h2>
                    </section>
                <section>
                </section
            </div>
        </article>
    `
    */


