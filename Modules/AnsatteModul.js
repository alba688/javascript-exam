const EmployesModule = (function() {

    const employeArray = [ 
        {
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

    const getAllEmployes = () => employeArray;

    return{
        getAllEmployes
    }

}());

export default EmployesModule;