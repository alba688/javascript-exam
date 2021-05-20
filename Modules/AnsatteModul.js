const AnsatteModul = (function() {

    const AnsatteArray = [ 
        {
            Bilde: "placeholderWaiter-test.png",
            Navn: "Kai",
            stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Navn: "Mikkel",
            stilling: "Kok",
            Avdeling: "Bergen",
        },
        {
            Navn: "Ismail",
            stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Navn: "Alexandra",
            stilling: "Kok",
            Avdeling: "Trondheim",
        },
        {
            Navn: "Lars",
            stilling: "Bartender",
            Avdeling: "Oslo",
        },
        {
            Navn: "Kai",
            stilling: "Servitør",
            Avdeling: "Oslo",
        },
    ];

    const getAllEmployes = () => AnsatteArray;

    return{
        getAllEmployes
    }

}());

export default AnsatteModul;