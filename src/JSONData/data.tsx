export type items = {
    name: string,
    brand: string,
    img: string,
    quantity: string,
    price: string,
    id?:string,
    qty?:number,
    details?:{
        // Per 100 grams, glutinous rice contains (17):

Calories: "370 kcal"
Carbohydrates: "81.7 g",
Fiber: "2.8 g",
Sugars: "0 g",
Fat: "0.55 g",
Protein: "6.81 g",
Sodium: "7.0 mg (0.3% DV)",
Manganese: "0.97 mg (42.2% DV)",
Selenium: "15.10 mcg (27.5% DV)",
Copper: "0.17 mg (18.9% DV)"
    }
}
type Grocery = {
    rice: items[],
    oil: items[],
    masala: items[],
    vegetable: items[],
    breakfastItems: items[]
}

export const groceryData: Grocery = {
    rice: [
        {
            name: "Ambermohar",
            brand: "Mango blooms",
            img: "https://www.ibef.org/indian-organic-rice/ambemohar-rice_files/Ambemohar-Rice.png",
            quantity: "26kg",
            price: "1350 INR",
            id:"rice"
        },
        {
            name: "Bamboo",
            brand: "Kerla Rice",
            img: "https://www.creativeglassshop.eu/31314-large_default/bullseye-frit-olive-green-medium-450g-opalescent.jpg",
            quantity: "26kg",
            price: "1300 INR",
            id:"rice"
        },
        {
            name: "Basmati",
            brand: "aromatic",
            img: "https://th.bing.com/th/id/R.d7a8235f9faeb2de23713ff7635b8ca8?rik=qfxOI1sx1WtMaA&riu=http%3a%2f%2fplantbasedu.com%2fwp-content%2fuploads%2f2012%2f10%2fBasmati-Rice.jpg&ehk=mAoO2nhinXuuqM%2fM%2f1gji8Yilzk4aL%2foqe1wBAcbFgU%3d&risl=&pid=ImgRaw&r=0",
            quantity: "26kg",
            price: "1500 INR",
            id:"rice"
        },
        {
            name: "Arborio",
            brand: "Italian Rice",
            img: "https://www.nutritionadvance.com/wp-content/uploads/2023/06/white-Italian-Arborio-rice-in-a-container.jpg",
            quantity: "26kg",
            price: "1800 INR",
            id:"rice"
        },
        {
            name: "Black Rice",
            brand: "Kerla Farming",
            img: "https://www.nutritionadvance.com/wp-content/uploads/2023/06/a-wooden-spoon-of-black-rice-on-top-of-pile-of-black-rice.jpg",
            quantity: "26kg",
            price: "1900 INR",
            id:"rice"

        },
        {
            name: "Brown Rice",
            brand: "Tractor Brand",
            img: "https://www.nutritionadvance.com/wp-content/uploads/2023/06/pile-of-uncooked-brown-rice.jpg",
            quantity: "26kg",
            price: "1300 INR",
            id:"rice"

        },
        {
            name: "Glutinous Rice",
            brand: "Odisha Rice Ltd",
            img: "https://www.nutritionadvance.com/wp-content/uploads/2023/06/glutinous-sticky-rice.jpg",
            quantity: "26kg",
            price: "2000 INR",
            id:"rice"

        }
    ],
    oil:[
        {
            name: "oconut Oil",
            brand: "Til Sona",
            img: "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/215317396/coconut-oil-fresh.jpg?resize=640,468&quality=82&strip=all",
            quantity: "1 ltr",
            price: "170 INR",
            id:"cooking_oil"
        },
        {
            name: "Avocado  Oil",
            brand:"Avocado Ltd.",
            img: "https://www.nutritionadvance.com/wp-content/uploads/2018/10/avocado-oil-in-a-jug.jpg",
            quantity: "1 ltr",
            price: "500 INR",
            id:"cooking_oil"
        },
        {
            name: "Canola (Rapeseed Oil)",
            brand:"Canola Ltd.",
            img: "https://www.nutritionadvance.com/wp-content/uploads/2018/10/canola-rapeseed-oil.jpg",
            quantity: "1 ltr",
            price: "300 INR",
            id:"cooking_oil"
        },
        {
            name: "Saje Jojoba Oil",
            brand:"Dr. King",
            img: "https://www.saje.com/cdn/shop/products/dual_Saje_WB_jojoba-1_1000x1000_b44dd29e-a37c-4bb5-9b41-cf64dd702154_800x.png?v=1684239135",
            quantity: "250ml",
            price: "300 INR",
            id:"skinCare_oil"
        },
        {
            name: "Gisou Honey Face Oil",
            brand:"GISOU",
            img: "https://us.gisou.com/cdn/shop/products/Gisou_Honey_Infused_Face_Oil_PDP-01_96953041-a40e-4b31-9c71-c74c935e5d0a_600x750_crop_center.jpg?v=1664176979",
            quantity: "250ml",
            price: "350 INR",
            id:"skinCare_oil"
        },
        {
            name: "SBJ Esntls Papaya Glow Oil",
            brand:"SBJ ESNTLS",
            img: "https://th.bing.com/th/id/OIP.lJH4TEytGpgtvybLNG_dsgHaHa?rs=1&pid=ImgDetMain",
            quantity: "250ml",
            price: "200 INR",
            id:"skinCare_oil"
        },
    ],
    masala:[
        {
            name: "Turmeric Powder",
            brand: "Home Fills",
            img: "https://th.bing.com/th/id/OIP.Hu3HJXo6QuU3osazRccTyQAAAA?rs=1&pid=ImgDetMain",
            quantity: "100 gram",
            price: "70 INR",
            id:"masala"
        }, 
    ],
    vegetable:[
        {
            name: "Potato",
            brand: "Reddy's Potato",
            img: "https://images-na.ssl-images-amazon.com/images/I/81459bqY2HL._SL1500_.jpg",
            quantity: "1 kg",
            price: "70 INR",
            id:"vegetable"
        }, 
    ],
    breakfastItems:[
        {
            name: "Maggie",
            brand: "Nestle",
            img: "https://knnindia.co.in/uploads/newsfiles/maggi-30-11-15.jpg",
            quantity: "1 Packet",
            price: "30 INR",
            id:"breakfast"
        },
    ]   
}