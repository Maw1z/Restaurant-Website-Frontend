import { useState } from "react";
import interior2 from "../assets/location_images/interior-2.jpg";
import ReservationSuccessfullMessage from "./ReservationSuccessfullMessage";

function Reservation() {
  const [Page, setPage] = useState(1);

  function nextPage() {
    if (isPageValid(Page)) {
      setPage((oldPage) => oldPage + 1);
    }
  }

  function prevPage() {
    setPage((oldPage) => oldPage - 1);
  }

  function isPageValid(page) {
    const phoneNumberPattern = /^[0-9]{2}-[0-9]{1}-[0-9]{4}-[0-9]{4}$/;
    switch (page) {
      case 1:
        return (
          formValues.location &&
          formValues.guestCount &&
          formValues.reservationDate
        );
      case 2:
        return (
          formValues.firstName &&
          formValues.lastName &&
          formValues.phoneNumber.match(phoneNumberPattern) &&
          formValues.emailAddress
        );
      case 3:
        return true;
      default:
        return false;
    }
  }

  const [formValues, setFormValues] = useState({
    location: "",
    guestCount: 0,
    reservationDate: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    specialRequests: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservation = formValues;
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const response = await fetch(`${apiUrl}/api/restaurants/reservation`, {
      method: "POST",
      body: JSON.stringify(reservation),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setFormValues({
        location: "",
        guestCount: 0,
        reservationDate: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        specialRequests: "",
      });
      setSuccessfullMessage(true);
      console.log("new reservation added", json);
    }
  };

  const [successfullMessage, setSuccessfullMessage] = useState(false);

  function resetPage() {
    setPage(1);
    setSuccessfullMessage(false);
  }

  return (
    <section className="section__mostPadding h-screen border-2 border-black">
      <div
        className={`container__narrowest h-5/6 flex justify-center items-center ${
          successfullMessage == true ? "blur-md" : ""
        }`}
      >
        <div className="w-5/6 h-full flex flex-col gap-10 items-center">
          <div className="text-9xl italic mySerif text-accent self-start">
            Reservations
          </div>
          <div className="flex w-full h-full items-start gap-20">
            <div className="w-1/2 border-red-700 h-full flex">
              <img src={interior2} alt="" className="object-fill" />
            </div>
            <div id="form" className="w-5/12 font-mySans">
              <h4 className="title1 font-bold">Reservation details</h4>
              <div className="my-5 w-5/6 flex justify-center items-center">
                <span className={`dot ${Page === 1 ? "activedot" : ""}`}></span>
                <span className={`dot ${Page === 2 ? "activedot" : ""}`}></span>
                <span className={`dot ${Page === 3 ? "activedot" : ""}`}></span>
              </div>
              <form action="">
                {Page === 1 && (
                  <div id="form_part1" className="formVisibility create">
                    <div className="mb-5">
                      <label htmlFor="location" className="title3">
                        Location
                      </label>
                      <div className="w-5/6 h-12">
                        <select
                          name="location"
                          id="location"
                          className="reservationSelect bg-gray-200"
                          value={formValues.location}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select your location
                          </option>
                          <option value="Sydney Branch">Sydney Branch</option>
                          <option value="Melbourne Branch">
                            Melbourne Branch
                          </option>
                          <option value="Brisbane Branch">
                            Brisbane Branch
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="guestCount" className="title3">
                        Number of Guests
                      </label>
                      <br />
                      <div className="w-5/6 h-12">
                        <select
                          name="guestCount"
                          id="guestCount"
                          className="reservationSelect bg-gray-200"
                          value={formValues.guestCount}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Please select
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="reservationDate" className="title3">
                        Date
                      </label>
                      <br />
                      <div className="w-5/6 h-12 flex justify-center items-center ">
                        <input
                          type="date"
                          name="reservationDate"
                          id="reservationDate"
                          className="w-full h-full px-5 bg-gray-200"
                          value={formValues.reservationDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                {Page === 2 && (
                  <div id="form_part2">
                    <div className="mb-5">
                      <label htmlFor="firstName" className="title3">
                        First name
                      </label>
                      <br />
                      <div className="w-5/6 h-12 flex justify-center items-center ">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="w-full h-full px-5 bg-gray-200"
                          placeholder="John"
                          value={formValues.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="lastName" className="title3">
                        Last name
                      </label>
                      <br />
                      <div className="w-5/6 h-12 flex justify-center items-center ">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="w-full h-full px-5 bg-gray-200"
                          placeholder="Doe"
                          value={formValues.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="phoneNumber" className="title3">
                        Phone number
                      </label>
                      <br />
                      <div className="w-5/6 h-12 flex justify-center items-center ">
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="w-full h-full px-5 bg-gray-200"
                          placeholder="61-2-1234-5678"
                          value={formValues.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="emailAddress" className="title3">
                        Email address
                      </label>
                      <br />
                      <div className="w-5/6 h-12 flex justify-center items-center ">
                        <input
                          type="email"
                          name="emailAddress"
                          id="emailAddress"
                          className="w-full h-full px-5 bg-gray-200"
                          placeholder="johndoe@email.com"
                          value={formValues.emailAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                {Page === 3 && (
                  <div id="form_part3">
                    <div className="mb-5">
                      <label htmlFor="specialRequests" className="title3">
                        Special Requests
                      </label>
                      <div className="mt-4 mb-7 w-5/6 h-12 flex justify-center items-center ">
                        <textarea
                          className="w-full p-3 border-2 bg-gray-200 placeholder-[#9da3b7] rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-0 resize-none"
                          name="specialRequests"
                          id="specialRequests"
                          placeholder="Allergic to shellfish. Prefer a window seat."
                          value={formValues.specialRequests}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}
                <div className="w-5/6 flex justify-center items-center gap-5">
                  {Page > 1 && Page < 4 && (
                    <button
                      className="w-1/3 h-12 rounded-sm bg-secondary text-primary title3 hover:bg-primary hover:border-2 hover:border-secondary hover:text-secondary active:bg-secondary active:text-primary"
                      onClick={prevPage}
                    >
                      Previous
                    </button>
                  )}
                  {Page < 3 && (
                    <button
                      className="w-1/3 h-12 title3 accentButton"
                      onClick={nextPage}
                    >
                      Next
                    </button>
                  )}
                  {Page == 3 && (
                    <button
                      className="w-1/3 h-12 title3 accentButton"
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Submit
                    </button>
                  )}
                  {Page == 3 && error && <div className="error">{error}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ReservationSuccessfullMessage
        successfullMessage={successfullMessage}
        resetPage={resetPage}
      />
    </section>
  );
}

export default Reservation;
