import { useState, useEffect } from "react";
import arrow from "../assets/arrow.svg";
import interior1 from "../assets/location_images/interior-1.jpg";
import interior3 from "../assets/location_images/interior-3.jpg";
import interior4 from "../assets/location_images/interior-4.jpg";
import interior5 from "../assets/location_images/interior-5.jpg";

function Location() {
  const [locations, setLocations] = useState(null);
  const [expandedLocations, setexpandedLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(
        "http://localhost:3700/api/restaurants/location"
      );
      const json = await response.json();

      if (response.ok) {
        setLocations(json);

        const locationNames = json.map((location) => location.name);
        setexpandedLocations(locationNames);
      }
    };

    fetchLocations();
  }, []);

  const handleToggle = (locationName) => {
    setexpandedLocations((prevState) =>
      prevState.includes(locationName)
        ? prevState.filter((name) => name !== locationName)
        : [...prevState, locationName]
    );
  };

  return (
    <main className="section__mostPadding h-screen border-2 border-black">
      <div className="container__narrowest h-5/6 flex justify-center items-center">
        <div className="w-5/6 h-full flex flex-col gap-7 items-center">
          <div className="text-9xl italic mySerif text-accent self-start">
            Locations
          </div>
          <div className="w-11/12 h-[110%] flex justify-evenly items-center">
            <div className="w-1/3 h-full overflow-y-scroll">
              <div className="border-t-2 border-black">
                {locations &&
                  locations.map((location) => (
                    <div
                      key={location._id}
                      className="border-b-2 border-black font-mySans py-2"
                    >
                      <div className="flex justify-between items-center title1 font-bold">
                        <p>{location.name}</p>
                        <img
                          src={arrow}
                          className={`cursor-pointer w-16 transition-transform ${
                            expandedLocations.includes(location.name)
                              ? "rotate-180"
                              : ""
                          }`}
                          onClick={() => handleToggle(location.name)}
                          alt="Toggle details"
                        />
                      </div>
                      {expandedLocations.includes(location.name) && (
                        <>
                          <div className="heading font-normal">
                            <p>{location.address}</p>
                            <p>{`${location.city}, ${location.state} ${location.postcode}`}</p>
                            <p className="my-3">{location.phone}</p>
                          </div>
                          <button className="w-1/3 h-11 border-2 border-black font-bold bg-primary rounded-sm text-center hover:bg-secondary hover:text-primary">
                            View on map
                          </button>
                          <div className="mt-3 mb-6 body">
                            <p className="font-bold heading">
                              Hours of operation:
                            </p>
                            {Object.entries(location.hours).map(
                              ([day, time]) => (
                                <div
                                  key={day}
                                  className="w-full flex justify-between items-center"
                                >
                                  <p>{day}</p>
                                  <p>{time}</p>
                                </div>
                              )
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-[60%] h-5/6 overflow-hidden">
              <div className="w-full h-full flex slideAnimation">
                <img
                  src={interior1}
                  className="object-cover"
                  alt="Restaurant Interior"
                />
                <img
                  src={interior3}
                  className="object-cover"
                  alt="Restaurant Interior"
                />
                <img
                  src={interior4}
                  className="object-cover"
                  alt="Restaurant Interior"
                />
                <img
                  src={interior5}
                  className="object-cover"
                  alt="Restaurant Interior"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Location;
