import React, { useEffect, useState } from 'react';

export default function Calorie({ food }) {
  const eatableItems = [
    "Apple", "Banana", "Mango", "Grapes", "Strawberry", "Chips", "Biscuits",
    "Popcorn", "Samosa", "Chocolate", "Pizza", "Burger", "Biryani", "Pasta",
    "Paneer Butter Masala", "Ice Cream", "Gulab Jamun", "Cake", "Ladoo", "Kheer",
    "Water", "Tea", "Coffee", "Juice", "Milkshake", "Rice"
  ];

  const [calorie, setCalorie] = useState(null);

  const object = {
    method: 'GET',
    headers: {
      "x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": import.meta.env.VITE_CALORIE_RAPIDAPI_KEY
    }
  };

  // now function takes foodName
  const getCalories = async () => {
    const response = await fetch(
      `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${food}`,
      object
    );
    const result = await response.json();
    return result;
  };

  const lower = food.toLowerCase();
  const item = eatableItems.find((p) => lower.includes(p.toLowerCase()));

  useEffect(() => {
    if (item) {
      async function fetchCalories() {
        try {
          const data = await getCalories();
          console.log("API response:", data);

          // you may need to adjust according to API response
          if (data.items && data.items.length > 0) {
  setCalorie(data.items[0].calories);
} else {
  setCalorie("Not Found");
}
        } catch (error) {
          console.error(error);
          setCalorie("Error fetching data");
        }
      }
      fetchCalories();
    } else {
      setCalorie("Unknown food");
    }
  }, [item]);

  if (!item || !calorie) return null;

  return (
    <div>
      {typeof calorie === "string"
        ? calorie
        : `Calories in ${item}: ${calorie}`}
    </div>
  );
}
