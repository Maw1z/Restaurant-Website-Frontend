import { useState } from "react";
import Appetizers from "./MenuItems/Appetizers";
import Main from "./MenuItems/Main";
import Desserts from "./MenuItems/Desserts";
import Drinks from "./MenuItems/Drinks";

function Menu() {
  const [selectedCourse, setSelectedCourse] = useState("Appetizers");

  const changeCourse = (e) => {
    e.preventDefault();
    setSelectedCourse(e.target.getAttribute("name"));
  };

  const linkClass = (course) =>
    `font-mySans display2 underline-offset-8 ${
      selectedCourse === course ? "underline" : "linkUnderline"
    }`;

  return (
    <main className="section__mostPadding h-screen border-2 border-black">
      <div className="container__narrowest flex justify-center items-center">
        <div className="w-5/6 flex flex-col gap-4 items-center">
          <div className="text-9xl italic mySerif text-accent self-start">
            Menu
          </div>
          <div className="flex flex-col gap-6 w-10/12">
            <div className="flex justify-center items-center self-start">
              <a
                href=""
                name="Appetizers"
                onClick={changeCourse}
                className={linkClass("Appetizers")}
              >
                Appetizers
              </a>
              <p className="display1 mr-4 ml-4">&#47;</p>
              <a
                href=""
                name="Main"
                onClick={changeCourse}
                className={linkClass("Main")}
              >
                Main
              </a>
              <p className="display1 mr-4 ml-4">&#47;</p>
              <a
                href=""
                name="Desserts"
                onClick={changeCourse}
                className={linkClass("Desserts")}
              >
                Desserts
              </a>
              <p className="display1 mr-4 ml-4">&#47;</p>
              <a
                href=""
                name="Drinks"
                onClick={changeCourse}
                className={linkClass("Drinks")}
              >
                Drinks
              </a>
            </div>
            <div className="flex justify-around mt-7 w-full">
              {selectedCourse === "Appetizers" && <Appetizers />}
              {selectedCourse === "Main" && <Main />}
              {selectedCourse === "Desserts" && <Desserts />}
              {selectedCourse === "Drinks" && <Drinks />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Menu;
