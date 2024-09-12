import { useEffect, useState } from "react";

function Drinks() {
  const [isHovered, setIsHovered] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch(
        "http://localhost:3700/api/restaurants/menu"
      );
      const json = await response.json();

      if (response.ok) {
        const filteredDrinks = json.filter(
          (item) => item.foodCourse === "Drink"
        );
        setDrinks(filteredDrinks);
      }
    };

    fetchDrinks();
  }, []);

  const handleMouseOver = (e) => {
    setIsHovered(e.target.getAttribute("name"));
  };

  const handleMouseOut = () => {
    setIsHovered(null);
  };

  const handleClick = (e) => {
    setSelectedItem(e.target.getAttribute("name"));
  };

  const isSelected = (name) => selectedItem === name;

  return (
    <div className="flex justify-around w-full">
      <div className="w-1/2">
        {isHovered ? `Hovered over: ${isHovered}` : `Selected: ${selectedItem}`}
      </div>
      <div className="w-1/2">
        {drinks &&
          drinks.map((drink) => (
            <div
              key={drink._id}
              name={drink._id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
              className={`flex justify-start items-center w-full 
          font-mySans title3 font-medium 
          border-b-2 border-black py-5 px-10 
          cursor-pointer ${isSelected(drink._id) ? "text-accent" : ""}`}
            >
              <div>{drink.foodTitle}</div>
              <div className="ml-auto">${drink.foodPrice}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Drinks;
