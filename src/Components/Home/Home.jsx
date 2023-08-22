import React, { useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import productData from "../../Constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Product/Card/Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageLink = [
    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    "https://m.media-amazon.com/images/I/61mNECvgEfL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/51j9Jz-VaKL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71WvAL5K8IL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61HBeh4tctL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zo0bi957L._SX3000_.jpg",
  ];

  const handleChange = (option) => {
    console.clear();
    if (option === 1) {
      currentIndex < imageLink.length - 1
        ? setCurrentIndex(currentIndex + 1)
        : setCurrentIndex(0);
    } else {
      currentIndex > 0
        ? setCurrentIndex(currentIndex - 1)
        : setCurrentIndex(imageLink.length - 1);
    }
  };

  const handleChangeOnTime = () =>
    currentIndex < imageLink.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);

  setTimeout(() => handleChangeOnTime(), 25000);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home" id="home">
      <div className="home__container">
        <button
          className="home__btn home__btn--next"
          onClick={() => handleChange(1)}
        >
          <ArrowBackIosIcon />
        </button>
        <img
          src={imageLink[currentIndex]}
          alt="amazon page banner"
          className="home__image"
        />
        <button
          className="home__btn home__btn--previous"
          onClick={() => handleChange(2)}
        >
          <ArrowForwardIosIcon />
        </button>
        <div className="home__card">
          <div className="home__card__row">
            <Slider {...settings}>
              {productData[0].map((data) => (
                <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  image={data.image}
                  price={data.price}
                  rating={data.rating}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="home__row">
          {productData[1].map((data) => {
            const key = data.id;
            return (
              <Product
                key={key}
                id={data.id}
                title={data.title}
                image={data.image}
                price={data.price}
                rating={data.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
