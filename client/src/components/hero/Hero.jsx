import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.Hero}>
      <div className="absolute  inset-0  sm:bg-transparent "></div>

      <div className="relative mt-2  font-Poppins mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-5xl text-left font-extrabold sm:text-5xl">
            Unlock the Secrets
            <strong className="block font-extrabold text-primary">
              of Delicious Dishes
            </strong>
          </h1>

          <p className="mt-4 text-left max-w-lg sm:text-xl/relaxed">
            Whisking Up Culinary Magic: Where Flavor, Tradition, and Innovation
            Dance Together in a Symphony of Delightful Dishes
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-400 focus:outline-none focus:ring active:bg-yellow-600 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-whitee px-12 py-3 text-sm font-medium text-blackk shadow sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
