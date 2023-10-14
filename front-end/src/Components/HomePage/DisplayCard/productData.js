import ToysImage from "../../../assets/products/Toys.jpg"
import ElectronicsImage from "../../../assets/products/Electronics.jpg"
import HomeAndKitchenImage from "../../../assets/products/HomeAndKitchen.jpg"
import Fashion from "../../../assets/products/Fashion.jpg"
import Fitness from "../../../assets/products/Fitness.jpg"
const productsData = [
    {
        title:'Toys Under $30',
        coverImage : ToysImage,
        status : "shop now",
        seeMore : false,
        subItems :[
            {
                title : 'Cars',
                subCoverImage : '',
            }
        ]
       
    },
    {
        title:'Electronics',
        coverImage : ElectronicsImage,
        status : "see more",
        subItems :[
            {
                title : `LED's`,
                subCoverImage : '',
            }
        ]

    },
    {
        title:'Fashion Trends You Like',
        coverImage : Fashion,
        status : "see more",
        subItems :[
            {
                title : `Jackets`,
                subCoverImage : '',
            }
        ]
    },
    {
        title:'Home & Kitchen Under $30',
        coverImage : HomeAndKitchenImage,
        status : "see more",
        subItems :[
            {
                title : `Oven`,
                subCoverImage : '',
            }
        ]
    },
    {
        title:'Get Fit at home',
        coverImage : Fitness,
        status : "see more",
        subItems :[
            {
                title : `Oven`,
                subCoverImage : '',
            }
        ]
    },
    

]
export default productsData;