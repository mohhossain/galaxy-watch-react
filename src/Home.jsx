import React from "react";
import PlanetCard from "./PlanetCard";
import Search from "./Search";

function Home() {
  return (
    <>
      <Search />
      <div className="home">
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
      </div>
    </>
  );
}

export default Home;
