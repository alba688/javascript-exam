const employeModul = (function() {

    const employeArray = [ 
        {
            Bilde: "waiter2.png",
            Alt: "stock bilde servitør",
            Navn: "Kai",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Bilde: "kok2.png",
            Alt: "stock bilde kokk",
            Navn: "Mikkel",
            Stilling: "Kokk",
            Avdeling: "Bergen",
        },
        {
            Bilde: "waiter2.png",
            Alt: "stock bilde servitør",
            Navn: "Ismail",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
        {
            Bilde: "waitress2.png",
            Alt: "stock bilde servitør",
            Navn: "Alexandra",
            Stilling: "Bartender",
            Avdeling: "Trondheim",
        },
        {
            Bilde: "kok2.png",
            Alt: "stock bilde kokk",
            Navn: "Lars",
            Stilling: "Kokk",
            Avdeling: "Oslo",
        },
        {
            Bilde: "waiter2.png",
            Alt: "stock bilde servitør",
            Navn: "Kai",
            Stilling: "Servitør",
            Avdeling: "Oslo",
        },
    ];

    const getAllEmployes = () => employeArray;

    const addNewEmploye = (employe) => employeArray.push(employe);

    const deleteItem = (deleteIndex) => employeArray.splice(deleteIndex, 1);

    return{
        getAllEmployes,
        addNewEmploye,
        deleteItem
    };

}());

export default employeModul;