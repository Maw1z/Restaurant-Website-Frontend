function ReservationSuccessfullMessage({ successfullMessage, resetPage }) {
  return (
    <div
      className={`fixed bg-primary border-2 border-accent w-1/3 h-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-center items-center gap-5 ${
        successfullMessage == false ? "hidden" : "inline-block"
      } `}
    >
      <div className="w-8/12 text-center">
        <h3 className="title3">
          Your reservation has been made, click the button below to go back to
          the homepage
        </h3>
      </div>
      <button className="w-1/4 h-12 title3 accentButton" onClick={resetPage}>
        Okay
      </button>
    </div>
  );
}

export default ReservationSuccessfullMessage;
