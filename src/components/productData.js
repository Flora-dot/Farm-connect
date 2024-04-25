// Crops
// Tubers
import YamImage from '../assets/images/yam.jpg';
import YamImageTwo from '../assets/images/yam.png';
import SweetPotatoImage from '../assets/images/sweet potato.jpg';
import CassavaImage from '../assets/images/cassava.png';
import IrishPotatoImage from '../assets/images/irish potato.jpg';
// Grains and Cereals
import CornKernelImage from '../assets/images/corn kernel.jpg';
import RiceBagImage from '../assets/images/Bag of rice.jpg';
import RiceImage from '../assets/images/rice.svg'
import BeansImage from '../assets/images/beans.jpg';

// Fruits and Veggies
// Fruits
import StrawberryImage from '../assets/images/strawberries.png';
import PearImage from '../assets/images/pear.jpg';
import PineappleImage from '../assets/images/pineapple.png';
import OrangeImage from '../assets/images/orange.jpg';
import MangoImage from '../assets/images/mango.png';
import LimeImage from '../assets/images/lime.jpg';
import CherriesImage from '../assets/images/cherries.jpg';
// Veggies
import CucumberImage from '../assets/images/cucumber.jpg';
import PlantainImage from '../assets/images/plantain.png';
import CarrotImage from '../assets/images/rainbow-carrot.png';
import SpringOnionsImage from '../assets/images/spring onion.jpg'
import OnionImage from '../assets/images/onions.jpg';
import PalmKernelImage from '../assets/images/palm kernel.png';
import EggImage from '../assets/images/eggs.png';
import EggPlantImage from '../assets/images/egg-plant.png';
import GreenPeppers from '../assets/images/green peppers.jpg';
import BroccoliImage from '../assets/images/broccoli.jpg';
import TomatoImage from '../assets/images/tomato.jpg';

// Livestock
// Fish
import CatfishImage from '../assets/images/catfish-image.png';
import SmokedFish from '../assets/images/smoked catfish.png';
import SalmonImage from '../assets/images/fresh-salmon.png';
import MackerelFish from '../assets/images/Mackerel fish.png'

// Meat
import ChicksImage from '../assets/images/2 weeks old chick.jpg'
import WholeChickenImage from '../assets/images/chicken.png'
import BroilerImage from '../assets/images/Broiler.jpg';


 const products = [
    {
        id: 'product-1',
        name: 'Yam',
        price: '10000',
        description: '5 tubers of Yam',
        image: YamImage,
        category: 'Crops',
        subcategory: 'Tubers',
    },
    {
        id: 'product-2',
        name: 'Yam',
        price: '8000',
        description: '5 tubers of Yam',
        image: YamImageTwo,
        category: 'Crops',
        subcategory: 'Tubers',
    },
    {
        id: 'product-3',
        name: 'Sweet Potato',
        price: '1000',
        description: '10 tubers of sweet potato',
        image: SweetPotatoImage,
        category: 'Crops',
        subcategory: 'Tubers',
    },
    {
        id: 'product-4',
        name: 'Irish Potato',
        price: '2000',
        description: '10 tubers of irish potato',
        image: IrishPotatoImage,
        category: 'Crops',
        subcategory: 'Tubers',
    },
    {
        id: 'product-5',
        name: 'Cassava',
        price: '3000',
        description: '10 tubers of cassava',
        image: CassavaImage,
        category: 'Crops',
        subcategory: 'Tubers',
    },
    {
        id: 'product-21',
        name: 'Rice',
        price: '50000',
        description: 'A bag of rice',
        image: RiceBagImage,
        category: 'Crops',
        subcategory: 'Grains and cereals',
    },
    {
        id: 'product-23',
        name: 'Corn Kernels',
        price: '3500',
        description: '1kg of corn kernels',
        image: CornKernelImage,
        category: 'Crops',
        subcategory: 'Grains and cereals',
    },
    {
        id: 'product-24',
        name: 'Beans',
        price: '5000',
        description: '1kg of beans',
        image: BeansImage,
        category: 'Crops',
        subcategory: 'Grains and cereals',
    },
    {
        id: 'product-25',
        name: 'Rice',
        price: '10000',
        description: 'Small bag of rice',
        image: RiceImage,
        category: 'Crops',
        subcategory: 'Grains and cereals',
    },
    {
        id: 'product-41',
        name: 'Orange',
        price: '10000',
        description: '50 pieces of orange',
        image: OrangeImage,
        category: 'Fruits and Veggies',
        subcategory: 'Fruits',
    },
    {
        id: 'product-42',
        name: 'Strawberries',
        price: '7000',
        description: '1kg of strawberries',
        image: StrawberryImage,
        category: 'Fruits and Veggies',
        subcategory: 'Fruits',
    },
    {
        id: 'product-43',
        name: 'Mango',
        price: '10000',
        description: '50 pieces of mango',
        image: MangoImage,
        category: 'Fruits and Veggies',
        subcategory: 'Fruits',
    },
    {
        id: 'product-44',
        name: 'Cherries',
        price: '5000',
        description: '1kg of cherries',
        image:CherriesImage,
        category: 'Fruits and Veggies',
        subcategory: 'Fruits',
    },
    {
        id: 'product-45',
        name: 'Pear',
        price: '8000',
        description: '50 pieces ofPear',
        image: PearImage,
        category: 'Fruits and Veggies',
        subcategory: 'Fruits',
    },
    {
        id: 'product-46',
        name: 'Lime',
        price: '15000',
        description: '50 pieces of Lime',
        image: LimeImage,
        category: 'Fruits and Veggies',
        subcategory: 'Fruits',
    },
    {
        id: 'product-47',
        name: 'Pineapple',
        price: '10000',
        description: '20 pieces of Pineapple',
        image: PineappleImage,
        category: 'Fruits and Veggies',
        subcategory: 'Fruits',
    },
    {
        id: 'product-61',
        name: 'Broccoli',
        price: '4000',
        description: '1kg of Broccoli',
        image: BroccoliImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-62',
        name: 'Cucumber',
        price: '15000',
        description: '30 pieces of cucumber',
        image: CucumberImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-63',
        name: 'Spring Onions',
        price: '2000',
        description: '1kg of spriong onions',
        image: SpringOnionsImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-64',
        name: 'Onions',
        price: '5000',
        description: '1kg of Onions',
        image: OnionImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-65',
        name: 'Plantain',
        price: '16000',
        description: '5 bunches of plantain',
        image: PlantainImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-66',
        name: 'Eggs',
        price: '60000',
        description: '10 crates of egg',
        image: EggImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-67',
        name: 'Tomato',
        price: '40000',
        description: '1 basket of tomatoes',
        image: TomatoImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-68',
        name: 'Green peppers',
        price: '3000',
        description: '1kg of green peppers',
        image: GreenPeppers,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-69',
        name: 'Egg Plant',
        price: '7000',
        description: '1kg of Egg plant',
        image: EggPlantImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-70',
        name: 'Carrot',
        price: '8500',
        description: '1kg of Carrots',
        image: CarrotImage,
        category: 'Fruits and Veggies',
        subcategory: 'Veggies',
    },
    {
        id: 'product-71',
        name: 'Palm kernel',
        price: '20000',
        description: '2kg palm kernelr',
        image: PalmKernelImage,
        category: 'Fruits and Veggies',
        subcategory: 'veggies',
    },
    {
        id: 'product-81',
        name: 'Catfish',
        price: '45000',
        description: '10kg of Catfish',
        image: CatfishImage,
        category: 'Livestock',
        subcategory: 'Fish',
    },
    {
        id: 'product-82',
        name: 'Smoked Catfish',
        price: '2500',
        description: '20kg of smoked Catfish',
        image: SmokedFish,
        category: 'Livestock',
        subcategory: 'Fish',
    },
    {
        id: 'product-83',
        name: 'Mackerel Fish',
        price: '25000',
        description: '20kg of mackerel fish',
        image: MackerelFish,
        category: 'Livestock',
        subcategory: 'Fish',
    },
    {
        id: 'product-84',
        name: 'Salmon',
        price: '1500',
        description: '10kg of salmon',
        image: SalmonImage,
        category: 'Livestock',
        subcategory: 'Fish',
    },
    {
        id: 'product-101',
        name: 'Broiler',
        price: '20000',
        description: '5 5weeks old broilers',
        image: BroilerImage,
        category: 'Livestock',
        subcategory: 'Poultry',
    },
    {
        id: 'product-102',
        name: 'Chicks',
        price: '10000',
        description: '10 2weeks old chicks',
        image:ChicksImage,
        category: 'Livestock',
        subcategory: 'Poultry',
    },
    {
        id: 'product-121',
        name: 'Chicken',
        price: '1500',
        description: 'Whole chicken',
        image: WholeChickenImage,
        category: 'Livestock',
        subcategory: 'Meat',
    },
]

export default products;

