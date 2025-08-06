import VegTali from "./../assets/menu/veg-thali.jpeg";
import NonVegTali from "./../assets/menu/non-veg-thali.jpeg";
import PaneerButterMasala from "./../assets/menu/paneer-butter-masala.jpeg";
import MasalaDosa from "./../assets/menu/masala-dosa.jpeg";
import JeeraRiceAndDaal from "./../assets/menu/jeera-rice-and-daal.jpeg";
import CholeBhature from "./../assets/menu/chole-bhature.jpeg";
import FishCurry from "./../assets/menu/fish-curry.png";
import ChickenTikka from "./../assets/menu/chicken-tikka.jpg";

import ChickenBiryani from "./../assets/menu/chicken-biryani.jpg";
import AaalooParatha from "./../assets/menu/aaloo-paratha.jpg";
import RajmaChawal from "./../assets/menu/rajma-chawal.png";
import HakkaNoodles from "./../assets/menu/hakka-noodles.jpg";
import EggCurry from "./../assets/menu/egg-curry.jpg";

const MENU_CARDS_DATA = [
  {
    id: "1",
    image: VegTali,
    title: "Veg Thali",
    shortDescription: "Rice, dal, sabzi, roti, salad & dessert",
    price: "120",
    category: "veg",
  },
  {
    id: "2",
    image: NonVegTali,
    title: "Non-Veg Thali",
    shortDescription: "Chicken curry, rice, roti, salad & dessert",
    price: "180",
    category: "non-veg",
  },
  {
    id: "3",
    image: PaneerButterMasala,
    title: "Paneer Butter Masala",
    shortDescription: "Creamy paneer curry cooked in buttery tomato gravy",
    price: "150",
    category: "veg",
  },
  {
    id: "4",
    image: MasalaDosa,
    title: "Masala Dosa",
    shortDescription: "Crispy dosa stuffed with spicy potato filling",
    price: "90",
    category: "veg",
  },
  {
    id: "5",
    image: JeeraRiceAndDaal,
    title: "Jeera Rice & Daal",
    shortDescription: "Fragrant jeera rice served with homestyle dal",
    price: "100",
    category: "veg",
  },
  {
    id: "6",
    image: CholeBhature,
    title: "Chole Bhature",
    shortDescription: "Spicy chickpeas served with fried bhature",
    price: "110",
    category: "veg",
  },
  {
    id: "7",
    image: HakkaNoodles,
    title: "Hakka Noodles",
    shortDescription: "Stir-fried noodles with veggies in Indo-Chinese style",
    price: "130",
    category: "veg",
  },
  {
    id: "8",
    image: RajmaChawal,
    title: "Rajma Chawal",
    shortDescription: "Kidney beans curry served with steamed rice",
    price: "110",
    category: "veg",
  },
  {
    id: "9",
    image: AaalooParatha,
    title: "Aloo Paratha",
    shortDescription: "Stuffed potato flatbread served with curd & pickle",
    price: "90",
    category: "veg",
  },

  {
    id: "10",
    image: ChickenBiryani,
    title: "Chicken Biryani",
    shortDescription: "Fragrant basmati rice layered with spicy chicken curry",
    price: "200",
    category: "non-veg",
  },
  {
    id: "13",
    image: ChickenTikka,
    title: "Chicken Tikka",
    shortDescription:
      "Juicy chicken pieces marinated in Indian spices and grilled",
    price: "190",
    category: "non-veg",
  },
  {
    id: "14",
    image: FishCurry,
    title: "Fish Curry",
    shortDescription: "Spicy coastal‑style fish curry with steamed rice",
    price: "170",
    category: "non-veg",
  },
  {
    id: "15",
    image:
      "https://images.pexels.com/photos/29684989/pexels-photo-29684989.jpeg", // Mutton Curry
    title: "Mutton Curry",
    shortDescription: "Tender mutton pieces in rich spicy curry",
    price: "250",
    category: "non-veg",
  },
  {
    id: "16",
    image: EggCurry,
    title: "Egg Curry",
    shortDescription: "Boiled eggs cooked in onion‑tomato masala",
    price: "130",
    category: "non-veg",
  },
];

export default MENU_CARDS_DATA;
