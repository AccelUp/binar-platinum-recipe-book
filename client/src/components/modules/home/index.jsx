import React from "react";
import Hero from "../../hero/Hero";
import PopularRecipe from "../../popular_recipe/PopularRecipe";
import StatCard from "../../stat_card/StatCard";
const Home = () => {
  return (
    <>
      <Hero />
      <PopularRecipe />
      <StatCard />
    </>
  );
};

export default Home;
