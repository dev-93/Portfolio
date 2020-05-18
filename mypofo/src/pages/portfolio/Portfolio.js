import React from 'react';
import "./portfolio.scss"
import PortfolioList from "./PortfolioList";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

const Portfolio = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }
  return (
    <>
      <div className="wrap_portfolio">
        <Swiper {...params}>
          {
            PortfolioList.map((list,index)=>{
              return (
                <div className="cont" key={index}>
                  <div className="explanation">
                    <div className="container">
                      <div className="title">{list.title}</div>
                      <div className="skills">{list.skills}</div>
                    </div>
                  </div>
                  
                  <div className="picture">
                    <figure>
                      <img src={list.imgUrl} alt={`${list.title} 이미지`} />
                    </figure>
                  </div>
                </div>
              )
            })
          }
          
        </Swiper>
      </div>
    </>
  );
}

export default Portfolio;

 
