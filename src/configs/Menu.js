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
    recipe: [
      "1. Wash and soak rice for 20 minutes. Cook in boiling water until soft, then drain.",
      "2. For dal: Pressure cook lentils with turmeric and salt. Temper with cumin, garlic, and red chili in ghee.",
      "3. For sabzi: Chop seasonal vegetables. Sauté onions, add tomatoes and spices, then add vegetables and cook until tender.",
      "4. For roti: Knead wheat flour with water and a pinch of salt. Roll into discs and cook on a hot tawa, applying ghee.",
      "5. Prepare a simple salad with cucumber, tomato, and onion. Add lemon juice and salt.",
      "6. Serve all items together with a small portion of dessert (e.g., gulab jamun or kheer).",
    ],
  },
  {
    id: "2",
    image: NonVegTali,
    title: "Non-Veg Thali",
    shortDescription: "Chicken curry, rice, roti, salad & dessert",
    price: "180",
    category: "non-veg",
    recipe: [
      "1. Wash and soak rice for 20 minutes. Cook until fluffy.",
      "2. For chicken curry: Marinate chicken with yogurt, ginger-garlic paste, and spices for 30 minutes. Sauté onions, add tomatoes and marinated chicken, cook until chicken is tender and gravy thickens.",
      "3. For roti: Knead dough, roll into discs, and cook on tawa with ghee.",
      "4. Prepare salad with sliced onions, cucumber, and lemon.",
      "5. Serve chicken curry, rice, roti, salad, and a dessert (e.g., halwa) together.",
    ],
  },
  {
    id: "3",
    image: PaneerButterMasala,
    title: "Paneer Butter Masala",
    shortDescription: "Creamy paneer curry cooked in buttery tomato gravy",
    price: "150",
    category: "veg",
    recipe: [
      "1. Sauté chopped onions, tomatoes, ginger, and garlic in butter until soft.",
      "2. Cool and blend to a smooth paste.",
      "3. In the same pan, melt more butter, add the paste, and cook with red chili powder, garam masala, and salt.",
      "4. Add cream and a little sugar. Stir well.",
      "5. Add paneer cubes and simmer for 5 minutes.",
      "6. Garnish with coriander and serve hot with naan or rice.",
    ],
  },
  {
    id: "4",
    image: FishCurry,
    title: "Fish Curry",
    shortDescription: "Spicy coastal‑style fish curry with steamed rice",
    price: "170",
    category: "non-veg",
    recipe: [
      "1. Marinate fish pieces with turmeric, salt, and lemon juice for 15 minutes.",
      "2. Sauté onions, ginger, and garlic. Add tomatoes and cook until soft.",
      "3. Add spices and coconut milk, bring to a simmer.",
      "4. Add fish pieces and cook gently until done.",
      "5. Serve hot with steamed rice.",
    ],
  },
  {
    id: "5",
    image: JeeraRiceAndDaal,
    title: "Jeera Rice & Daal",
    shortDescription: "Fragrant jeera rice served with homestyle dal",
    price: "100",
    category: "veg",
    recipe: [
      "1. For jeera rice: Heat ghee, add cumin seeds, then add soaked rice and sauté for 2 minutes. Add water and salt, cook until rice is done.",
      "2. For dal: Pressure cook lentils with turmeric and salt. Temper with mustard seeds, cumin, garlic, and curry leaves in ghee.",
      "3. Serve jeera rice with dal, garnished with coriander.",
    ],
  },
  {
    id: "6",
    image: CholeBhature,
    title: "Chole Bhature",
    shortDescription: "Spicy chickpeas served with fried bhature",
    price: "110",
    category: "veg",
    recipe: [
      "1. Soak chickpeas overnight. Pressure cook until soft.",
      "2. Sauté onions, ginger, and garlic. Add tomatoes and chole masala, cook until oil separates.",
      "3. Add boiled chickpeas, simmer for 15 minutes.",
      "4. For bhature: Knead flour with yogurt, baking powder, and salt. Rest for 2 hours.",
      "5. Roll dough into discs and deep fry until golden.",
      "6. Serve hot chole with bhature, onions, and pickle.",
    ],
  },
  {
    id: "7",
    image: EggCurry,
    title: "Egg Curry",
    shortDescription: "Boiled eggs cooked in onion‑tomato masala",
    price: "130",
    category: "non-veg",
    recipe: [
      "1. Boil eggs, peel, and lightly fry in oil (optional).",
      "2. Sauté onions, ginger, and garlic. Add tomatoes and cook until soft.",
      "3. Add spices and cook for 2 minutes.",
      "4. Add water, bring to a boil, then add eggs and simmer for 5 minutes.",
      "5. Garnish with coriander and serve with rice or roti.",
    ],
  },
  {
    id: "8",
    image: RajmaChawal,
    title: "Rajma Chawal",
    shortDescription: "Kidney beans curry served with steamed rice",
    price: "110",
    category: "veg",
    recipe: [
      "1. Soak rajma overnight. Pressure cook with salt until soft.",
      "2. Sauté onions, ginger, and garlic. Add tomatoes and cook until mushy.",
      "3. Add spices and cooked rajma with some water. Simmer for 20 minutes.",
      "4. Cook rice separately.",
      "5. Serve hot rajma with steamed rice.",
    ],
  },
  {
    id: "9",
    image: ChickenBiryani,
    title: "Chicken Biryani",
    shortDescription: "Fragrant basmati rice layered with spicy chicken curry",
    price: "200",
    category: "non-veg",
    recipe: [
      "1. Marinate chicken with yogurt, ginger-garlic paste, and biryani spices for 1 hour.",
      "2. Fry onions until golden. Cook marinated chicken with tomatoes and half the fried onions.",
      "3. Parboil basmati rice with whole spices (bay leaf, cardamom, cloves).",
      "4. Layer chicken and rice in a pot, top with remaining fried onions, saffron milk, and ghee.",
      "5. Cover and cook on low heat (dum) for 20 minutes.",
      "6. Serve hot with raita.",
    ],
  },
  {
    id: "10",
    image: AaalooParatha,
    title: "Aloo Paratha",
    shortDescription: "Stuffed potato flatbread served with curd & pickle",
    price: "90",
    category: "veg",
    recipe: [
      "1. Boil potatoes, peel and mash. Mix with chopped onions, green chilies, coriander, and spices.",
      "2. Knead wheat flour dough. Divide into balls, flatten, and stuff with potato mixture.",
      "3. Roll out gently and cook on tawa with ghee until golden on both sides.",
      "4. Serve hot with curd and pickle.",
    ],
  },
  {
    id: "11",
    image: ChickenTikka,
    title: "Chicken Tikka",
    shortDescription:
      "Juicy chicken pieces marinated in Indian spices and grilled",
    price: "190",
    category: "non-veg",
    recipe: [
      "1. Cut chicken into pieces. Marinate with yogurt, lemon juice, ginger-garlic paste, and tikka masala for 2 hours.",
      "2. Skewer the chicken pieces.",
      "3. Grill or bake at high temperature until cooked and slightly charred.",
      "4. Brush with butter, sprinkle chaat masala, and serve with mint chutney and salad.",
    ],
  },
  {
    id: "12",
    image: MasalaDosa,
    title: "Masala Dosa",
    shortDescription: "Crispy dosa stuffed with spicy potato filling",
    price: "90",
    category: "veg",
    recipe: [
      "1. Soak rice and urad dal separately for 6 hours. Grind to a smooth batter, mix, and ferment overnight.",
      "2. For potato masala: Boil potatoes, peel and mash. Sauté mustard seeds, curry leaves, onions, and green chilies. Add turmeric and potatoes, cook for 5 minutes.",
      "3. Heat a tawa, pour a ladle of batter, spread thin, drizzle oil, and cook until crisp.",
      "4. Place potato masala in the center, fold dosa, and serve with chutney and sambar.",
    ],
  },
  {
    id: "13",
    image:
      "https://images.pexels.com/photos/29684989/pexels-photo-29684989.jpeg", // Mutton Curry
    title: "Mutton Curry",
    shortDescription: "Tender mutton pieces in rich spicy curry",
    price: "250",
    category: "non-veg",
    recipe: [
      "1. Marinate mutton with yogurt, ginger-garlic paste, and spices for 1 hour.",
      "2. Sauté onions until golden, add marinated mutton and brown on high heat.",
      "3. Add tomatoes and cook until oil separates.",
      "4. Add water, cover, and simmer until mutton is tender (or pressure cook).",
      "5. Garnish with coriander and serve hot with rice or roti.",
    ],
  },
  {
    id: "14",
    image: HakkaNoodles,
    title: "Hakka Noodles",
    shortDescription: "Stir-fried noodles with veggies in Indo-Chinese style",
    price: "130",
    category: "veg",
    recipe: [
      "1. Boil noodles in salted water, drain, and toss with oil.",
      "2. Heat oil in a wok, add garlic, then sliced onions, carrots, capsicum, and cabbage. Stir-fry on high heat.",
      "3. Add noodles, soy sauce, vinegar, chili sauce, and pepper. Toss well.",
      "4. Garnish with spring onions and serve hot.",
    ],
  },
];

export default MENU_CARDS_DATA;
