import React from 'react';
import "./portfolio.scss"
import PortfolioList from "./PortfolioList";

const PortfolioItem = () => {
  return (
    <>
      {PortfolioList.map((list) => {
        return (
          <li>{list.id}</li>
        );
      })}
    </>
  );
}

const Portfolio = () => {
  return (
    <section className="portfolio">
      <ul>
        <PortfolioItem
          key={PortfolioList.id}
        />
      </ul>
    </section>
  );
}

export default Portfolio;
