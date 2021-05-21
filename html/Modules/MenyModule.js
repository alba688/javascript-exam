const MenyModule = (function() {

    const MenyArray = [ 
        {
            Bilde: "pizza-margherita.jpg",
            Navn: "Pizza Marinara",
            Pris: 180,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "pizza-ost.jpg",
            Navn: "Pizza Ost",
            Pris: 150,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "pizza-paprika.jpg",
            Navn: "Pizza Paprika",
            Pris: 200,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "pizza-deluxe.jpg",
            Navn: "Pizza Deluxe",
            Pris: 230,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "is-sjokolade.jpg",
            Navn: "Sjokolade Is",
            Pris: 60,
            Type: "Dessert",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "is-vanilje.jpg",
            Navn: "Vanilje Is",
            Pris: 50,
            Type: "Dessert",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "drikk-pepsi.jpg",
            Navn: "Pepsi Max",
            Pris: 30,
            Type: "Drikk",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "drikk-solo.jpg",
            Navn: "Solo",
            Pris: 30,
            Type: "Drikk",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        }
    ];

    const getAllMeny = () => MenyArray;

    const getByMenyType = (inputType) => {
        MenyArray.filter((menyObj) => menyObj.Type.toLowerCase() === inputType.toLowerCase());
        //console.log(menyObj.Type);
    }

    return{getAllMeny, getByMenyType};

}());

export default MenyModule;