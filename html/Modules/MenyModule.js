const MenyModule = (function() {

    const MenyArray = [ 
        {
            Bilde: "pizza-marinara.jpg",
            Alt: "Pizza marinara bilde",
            Navn: "Pizza Marinara",
            Pris: 180,
            Profitt: 150,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "pizza-ost.jpg",
            Alt: "Pizza ost bilde",
            Navn: "Pizza Ost",
            Pris: 150,
            Profitt: 130,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "pizza-paprika.jpg",
            Alt: "Pizza paprika bilde",
            Navn: "Pizza Paprika",
            Pris: 200,
            Profitt: 180,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "pizza-deluxe.jpg",
            Alt: "Pizza deluxe bilde",
            Navn: "Pizza Deluxe",
            Pris: 230,
            Profitt: 190,
            Type: "Pizza",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "is-sjokolade.jpg",
            Alt: "Sjokolade is bilde",
            Navn: "Sjokolade Is",
            Pris: 60,
            Profitt: 50,
            Type: "Dessert",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "is-vanilje.jpg",
            Alt: "Vanilje is bilde",
            Navn: "Vanilje Is",
            Pris: 60,
            Profitt: 50,
            Type: "Dessert",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "drikk-pepsi.jpg",
            Alt: "Pepsi drikke bilde",
            Navn: "Pepsi Max",
            Pris: 30,
            Profitt: 20,
            Type: "Drikk",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        },
        {
            Bilde: "drikk-solo.jpg",
            Alt: "Solo drikke bilde",
            Navn: "Solo",
            Pris: 30,
            Profitt: 20,
            Type: "Drikk",
            Beskrivelse: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi in officia nemo ullam. Perferendis sit assumenda, porro illo nostrum adipisci?"
        }
    ];

    const getAllMeny = () => MenyArray;

    const getLength = () => MenyArray.length;

    const getByCategory = (type) => MenyArray.filter (meny => meny.Type.toLowerCase() === type.toLowerCase() );

    const addNewItem = (itemObj) => MenyArray.push(itemObj);
    // OBS - create itemObj in js file 

    const deleteItem = (deleteIndex) => MenyArray.splice(deleteIndex, 1);
    //OBS - parameter meaning is splice(startIndex, deleteCount)
    
    return {
        getAllMeny,
        getLength,
        getByCategory,
        addNewItem,
        deleteItem
    }

}());

export default MenyModule;