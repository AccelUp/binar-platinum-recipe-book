import React from "react";
import Hero from "../../hero/Hero";
import PopularRecipe from "../../popular_recipe/PopularRecipe";
import StatCard from "../../stat_card/StatCard";
import Navbar from "../../../components/navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularRecipe />
      <StatCard />
    </>
  );
};

export default Home;
