import React, { useEffect, useState} from "react";
/* import CountButton from "./CountButton/CountButton"; */
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProductsState([
                "Apple",
                "Banana",
                "Orange",
                "Pineapple",
                "Strawberry",
                "Watermelon",
                "Mango",
                "Papaya",
                "Kiwi",
                "Grapes",
                "Lemon",
                "Lime",
                "Cherry",
                "Peach",
                "Pear",
                "Blueberry",
                "Raspberry",
                "Blackberry",
                "Cranberry",
                "Pomegranate",
                "Tomato",
                "Potato",
                "Onion",
                "Garlic",
                "Carrot",
                "Cucumber",
                "Spinach",
                "Broccoli",
                "Cabbage",
                "Corn",
                "Mushroom",
                "Peas",
                "Eggplant",
                "Asparagus",
                "Zucchini",
                "Sweet Potato",
                "Bell Pepper",
                "Cauliflower",
                "Celery",
                "Lettuce",
                "Avocado",
                "Pumpkin",
                "Squash",
                "Chili Pepper",
                "Cilantro",
                "Mint",
                "Basil",
                "Oregano",
                "Rosemary",
                "Thyme",
                "Parsley",
                "Sage",
                "Fennel",
                "Dill",
                "Anise",
                "Bay Leaf",
                "Chives",
                "Lavender",
                "Marjoram",
                "Mustard",
                "Tarragon",
                "Vinegar",
                "Sugar",
                "Salt",
                "Pepper",
                "Flour",
                "Bread",
                "Gluten Free Bread",
                "Rice",
                "Pasta",
                "Noodles",
                "Cereal",
                "Oatmeal",
                "Granola",
                "Pancake Mix",
                "Gluten Free Pancake Mix",
                "Gluten Free Pasta",
                "Gluten Free Cereal",
                "Gluten Free Oatmeal",
                "Gluten Free Granola",
                "Gluten Free Cake",
                "Gluten Free Cookies",
                "Gluten Free Crackers",
                "Gluten Free Pizza",
                "Gluten Free Tortillas",
                "Milk",
                "Cheese",
                "Butter",
                "Eggs",
                "Yogurt",
                "Cream",
                "Meat",
                "Pork",
                "Beef",
                "Chicken",
                "Turkey",
                "Fish",
                "Lamb",
                "Sausage",
                "Bacon",
                "Ham",
                "Salmon",
                "Tuna",
                "Sardines",
                "Shrimp",
                "Crab",
                "Lobster",
                "Oysters",
                "Clams",
                "Mussels",
                "Caviar",
                "Sushi",
                "Sashimi",
                "Soy Sauce",
                "Almonds",
                "Cashews",
                "Peanuts",
                "Pistachios",
                "Walnuts",
                "Hazelnuts",
                "Macadamia Nuts",
                "Pecans",
                "Pine Nuts",
                "Brazil Nuts",
                "Coconut",
                "Peanut Butter",
                "Honey",
                "Jam",
                "Jelly",
                "Chocolate",
                "Candy",
                "Ice Cream",
                "Cake",
                "Cookies",
                "Pie",
                "Donuts",
                "Frozen Pizza",
                "Deodorant",
                "Soap",
                "Shampoo",
                "Cotton Swabs",
                "Toothpaste",
                "Toothbrush",
                "Floss",
                "Razor",
                "Shaving Cream",
                "Lotion",
                "Sunscreen",
                "Tissues",
                "Band-Aids",
                "Ibuprofen",
                "Vitamin C",
                "Salt Pellets",
                "Air Filter",
            ]);
        }, 500);
    }, []);

    const hasProducts = productsState.length > 0;

    return (
        <div>
          
          {hasProducts ? <SearchBar products={productsState} /> : <p>Loading...</p>}
        </div>
    );
};

export default App;
