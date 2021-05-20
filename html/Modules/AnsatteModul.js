const AnsatteModul = (function() {

    const AnsatteArray = [ 
        {
            Bilde: "placeholderWaiter-test.png",
            Navn: "Kai",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Bilde: "placeholderWaiter-test.png",
            Navn: "Mikkel",
            Stilling: "Kok",
            Avdeling: "Bergen",
        },
        {
            Bilde: "placeholderWaiter-test.png",
            Navn: "Ismail",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Bilde: "placeholderWaiter-test.png",
            Navn: "Alexandra",
            Stilling: "Kok",
            Avdeling: "Trondheim",
        },
        {
            Bilde: "placeholderWaiter-test.png",
            Navn: "Lars",
            Stilling: "Bartender",
            Avdeling: "Oslo",
        },
        {
            Bilde: "placeholderWaiter-test.png",
            Navn: "Kai",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
    ];

    const getAllEmployes = () => AnsatteArray;

    return{
        getAllEmployes
    };

}());

export default AnsatteModul;