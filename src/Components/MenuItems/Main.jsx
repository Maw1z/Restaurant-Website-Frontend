import { useEffect, useState } from "react";

function Main() {
  const [isHovered, setIsHovered] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mains, setMain] = useState(null);

  useEffect(() => {
    const fetchMain = async () => {
      const response = await fetch(
        "http://localhost:3700/api/restaurants/menu"
      );
      const json = await response.json();

      if (response.ok) {
        const filteredMains = json.filter((item) => item.foodCourse === "Main");
        setMain(filteredMains);
      }
    };

    fetchMain();
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
        {mains &&
          mains.map((main) => (
            <div
              key={main._id}
              name={main._id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={handleClick}
              className={`flex justify-start items-center w-full 
          font-mySans title3 font-medium 
          border-b-2 border-black py-5 px-10 
          cursor-pointer ${isSelected(main._id) ? "text-accent" : ""}`}
            >
              <div>{main.foodTitle}</div>
              <div className="ml-auto">${main.foodPrice}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
