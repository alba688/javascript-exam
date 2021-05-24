const AnsatteModul = (function() {

    const AnsatteArray = [ 
        {
            Bilde: "waiter2.png",
            Navn: "Kai",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Bilde: "kok2.png",
            Navn: "Mikkel",
            Stilling: "Kok",
            Avdeling: "Bergen",
        },
        {
            Bilde: "waiter2.png",
            Navn: "Ismail",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Bilde: "waitress2.png",
            Navn: "Alexandra",
            Stilling: "Bartender",
            Avdeling: "Trondheim",
        },
        {
            Bilde: "kok2.png",
            Navn: "Lars",
            Stilling: "Kok",
            Avdeling: "Oslo",
        },
        {
            Bilde: "waiter2.png",
            Navn: "Kai",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
    ];

    const getAllEmployes = () => AnsatteArray;

    const addNewEmploye = (employe) => AnsatteArray.push(employe);

    return{
        getAllEmployes,
        addNewEmploye
    };

}());

export default AnsatteModul;