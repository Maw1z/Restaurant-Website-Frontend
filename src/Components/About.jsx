function About() {
  return (
    <section className="section__mostPadding h-screen border-2 border-black">
      <div className="container__narrowest flex justify-center items-center">
        <div className="w-5/6 flex flex-col gap-10 items-center">
          <div className="text-9xl italic mySerif text-accent self-start">
            About us
          </div>
          <div className="flex w-full h-full items-start gap-20">
            <div className="font-mySans text-justify title3 font-medium w-1/2">
              <p>
                At our Indian restaurant, we are dedicated to creating a dining
                experience that transcends expectations, blending the
                sophistication of fine dining with the comforting warmth of
                personalized service. From the moment you step through our
                doors, you will be greeted by an ambiance that is both elegant
                and inviting, where every detail has been thoughtfully curated
                to immerse you in the rich cultural heritage of India. Our menu
                is a testament to culinary artistry, featuring meticulously
                crafted dishes that celebrate the vibrant flavors and traditions
                of Indian cuisine.
              </p>
              <br />
              <p>
                We believe that dining should be an experience, not just a meal,
                which is why we prioritize attention to detail in everything we
                do. Our reservation-only policy allows us to focus on delivering
                exceptional service, ensuring that each guest receives the care
                and attention they deserve. Whether you are here for a special
                occasion or a casual evening out, we strive to make every visit
                memorable. Our commitment to excellence is reflected in our
                dedication to using only the finest ingredients, sourced with
                care, and prepared with passion by our skilled chefs.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                src="https://picsum.photos/id/45/450/500?grayscale"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
