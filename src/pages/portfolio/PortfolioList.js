import movie from "../img/movie.png";
import pulmuone from "../img/pulmuone.png";
import house from "../img/house.png";
import maserati from "../img/maserati.png";
import tomtoms from "../img/tomtoms.png";
import weather from "../img/weather.jpg";
import weatherLoading from "../img/weather_loading.jpg";
import shoppingmall from "../img/shoppingmall.png";


const PortfolioList = [{
  id: 1,
  imgUrl: 'https://dev-93.github.io/movie_app_2019',
  title: "Moive Web",
  skills: "REACT, react-router, axios, Movie API",
  img: movie,
}, {
  id: 2,
  imgUrl: 'https://http.cat/200',
  title: "The Weather App",
  skills: "REACT NATIVE, axios, Weather API",
  img: weather,
}, {
  id: 3,
  imgUrl: '../../../publishing/House/index.html',
  title: "쇼핑몰",
  skills: "React, react-router",
  img: shoppingmall,
}, {
  id: 4,
  imgUrl: '../../../publishing/House/index.html',
  title: "오늘의집",
  skills: "html, css, jquery",
  img: house,
  pages: "Main page, Sub pages(1,2), Responsive web"
}, {
  id: 5,
  imgUrl: '../../../publishing/Pulmuone/index.html',
  title: "풀무원",
  skills: "html, css, jquery",
  img: pulmuone,
  pages: "Responsive web"
}, {
  id: 6,
  imgUrl: '../../../publishing/TomToms/index.html',
  title: "탐앤탐스",
  skills: "html, css, jquery",
  img: tomtoms,
  pages: "Responsive web"
}, {
  id: 7,
  imgUrl: '../../../publishing/Maserati/index.html',
  title: "마세라티",
  skills: "html, css, jquery",
  img: maserati,
  pages: "Main page, Sub pages(1,2,3)"
}]

export default PortfolioList;