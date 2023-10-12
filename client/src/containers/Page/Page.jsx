import "../../components/Input/input.css";
import NavBar from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import classes from "./Page.module.css";

const Page = () => {
  return (
    <>
      <div className={classes.Home}>
        <NavBar />
        <Hero />
      </div>
    </>
  );
};

export default Page;
