import { useEffect, useState } from "react";

function Desserts() {
  const [isHovered, setIsHovered] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [desserts, setDesserts] = useState(null);

  useEffect(() => {
    const fetchDesserts = async () => {
      const response = await fetch(
        "http://localhost:3700/api/restaurants/menu"
      );
      const json = await response.json();

      if (response.ok) {
        const filteredDesserts = json.filter(
          (item) => item.foodCourse === "Dessert"
        );
        setDesserts(filteredDesserts);
      }
    };

    fetchDesserts();
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
        {desserts &&
          desserts.map((dessert) => (
            <div
              key={dessert._id}
              name={dessert._id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
              className={`flex justify-start items-center w-full 
          font-mySans title3 font-medium 
          border-b-2 border-black py-5 px-10 
          cursor-pointer ${isSelected(dessert._id) ? "text-accent" : ""}`}
            >
              <div>{dessert.foodTitle}</div>
              <div className="ml-auto">${dessert.foodPrice}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Desserts;
