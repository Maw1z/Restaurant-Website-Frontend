import { useEffect, useState } from "react";

function Appetizers() {
  const [isHovered, setIsHovered] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [appetizers, setAppetizers] = useState(null);

  useEffect(() => {
    const fetchAppetizers = async () => {
      const response = await fetch(
        "http://localhost:3700/api/restaurants/menu"
      );
      const json = await response.json();

      if (response.ok) {
        const filteredAppetizers = json.filter(
          (item) => item.foodCourse === "Appetizer"
        );
        setAppetizers(filteredAppetizers);
      }
    };

    fetchAppetizers();
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
        {appetizers &&
          appetizers.map((appetizer) => (
            <div
              key={appetizer._id}
              name={appetizer._id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
              className={`flex justify-start items-center w-full 
          font-mySans title3 font-medium 
          border-b-2 border-black py-5 px-10 
          cursor-pointer ${isSelected(appetizer._id) ? "text-accent" : ""}`}
            >
              <div>{appetizer.foodTitle}</div>
              <div className="ml-auto">${appetizer.foodPrice}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Appetizers;
