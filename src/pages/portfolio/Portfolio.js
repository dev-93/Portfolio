import React from "react";
import "./portfolio.scss";
import PortfolioList from "./PortfolioList";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Portfolio = () => {
    const params = {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    return (
        <>
            <div className="wrap_portfolio">
                <Swiper {...params}>
                    {PortfolioList.map((list, index) => {
                        return (
                            <div className="cont" key={index}>
                                <div className="explanation">
                                    <div className="container">
                                        <div className="title">
                                            Title: {list.title}
                                        </div>
                                        <div className="skills">
                                            Skills: {list.skills}
                                        </div>
                                        {list.pages && (
                                            <div className="pages">
                                                Page: {list.pages}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="picture">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            window.open(`${list.imgUrl}`);
                                        }}
                                    >
                                        <img
                                            src={list.img}
                                            alt={`${list.title} 이미지`}
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default Portfolio;
