import minar from "../assets/minar.svg";

function Hero() {
  return (
    <main className="section__morePadding flex justify-center items-center relative h-screen">
      <div className="relative container_wide">
        <div className="text-[152px] mySerif text-accent font-light text-center z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1300px]">
          <p>WELCOME TO</p>
          <p>MAAN RESTAURANT</p>
        </div>
        <div className="absolute inset-0 z-0">
          <svg width="0" height="0">
            <defs>
              <clipPath id="myClipPath">
                <path d="M173.392 0.948881C174.222 -0.0363847 175.759 -0.0259526 176.57 0.974647C231.092 68.216 350 79.1253 350 125.117C350 169.531 350 467.021 350 492.877C350 493.982 349.105 494.67 348 494.67H2C0.895434 494.67 5.00136e-07 493.979 1.28111e-06 492.875C1.92433e-05 467.47 0.000217072 180.237 1.93033e-05 125.117C-0.000185658 67.9929 117.823 66.9224 173.392 0.948881Z" />
              </clipPath>
            </defs>
          </svg>
          <img
            src="https://picsum.photos/350/500"
            className="w-full h-full object-cover"
            style={{ clipPath: "url(#myClipPath)" }}
          />
        </div>
        <div className="relative z-10">
          <img src={minar} className="" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
