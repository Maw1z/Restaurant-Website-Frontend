function OurStory() {
  return (
    <section className="section__mostPadding h-screen border-2 border-black">
      <div className="container__narrowest flex justify-center items-center">
        <div className="w-5/6 flex flex-col gap-20 items-center">
          <div className="text-9xl italic mySerif text-accent self-start">
            Our Story
          </div>
          <div className="w-5/6">
            <div>
              <p className="display2 italic mySerif text-accent">1982</p>
              <button>
                <div className="w-[35px] h-[35px] rounded-full border-2 border-accent flex justify-center items-center">
                  <div className="w-[21px] h-[21px] rounded-full bg-accent"></div>
                </div>
              </button>
              <p className="display2 italic mySerif text-secondary">1990</p>
              <button>
                <div className="w-[35px] h-[35px] rounded-full border-2 border-secondary flex justify-center items-center">
                  <div className="w-[21px] h-[21px] rounded-full bg-secondary"></div>
                </div>
              </button>
              <hr className="border-t-2 border-grey my-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
