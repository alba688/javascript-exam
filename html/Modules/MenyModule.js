const MenyModule = (function() {

    const MenyArray = [ 
        {
            bilde: "pizza-margherita.jpg",
            navn: "Pizza Marinara",
            pris: 180,
            type: "Pizza",
            beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            bilde: "pizza-ost.jpg",
            navn: "Pizza Ost",
            pris: 150,
            type: "Pizza", Type
            beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            bilde: "pizza-paprika.jpg",
            navn: "Pizza Paprika",
            pris: 200,
            type: "Pizza",
            beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            bilde: "pizza-deluxe.jpg",
            navn: "Pizza Deluxe",
            pris: 230,
            type: "Pizza",
            beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            bilde: "is-sjokolade.jpg",
            navn: "Sjokolade Is",
            pris: 60,
            type: "Dessert",
            beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            bilde: "is-vanilje.jpg",
            navn: "Vanilje Is",
            pris: 50,
            type: "Dessert",
            beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            bilde: "drikk-pepsi.jpg",
            navn: "Pepsi Max",
            pris: 30,
            type: "Drikk",
            beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
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
        MenyArray.filter((menyObj) => menyObj.type.toLowerCase() === inputType.toLowerCase());
        console.log(menyObj.type);
    }

    return{getAllMeny, getByMenyType};

}());

export default MenyModule;