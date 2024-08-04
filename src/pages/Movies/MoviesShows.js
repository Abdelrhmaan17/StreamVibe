import React from "react";
import "./responsive-movies.css";
import Header from "../../components/Header";
import BannerMovie from "../../components/BannerMovie";
import HeaderDesc from "../../components/HeaderDesc";
import SliderCatigores from "../../components/SliderCatigories";
import CardCatigores from "../../components/CardCatigores";
import CardFilm from "../../components/CardFilm";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import Footer from "../../components/Footer";
// import images
import film1 from "../../assets/imgs/film1.jpg";
import film2 from "../../assets/imgs/film2.jpg";
import film3 from "../../assets/imgs/film3.jpg";
import film4 from "../../assets/imgs/film4.jpg";
import film5 from "../../assets/imgs/film5.jpg";
import film6 from "../../assets/imgs/film6.jpg";
import film7 from "../../assets/imgs/film7.jpg";
import film8 from "../../assets/imgs/film8.jpg";
import film9 from "../../assets/imgs/film9.jpg";
import film10 from "../../assets/imgs/film10.jpg";
import film11 from "../../assets/imgs/film11.jpg";
import film12 from "../../assets/imgs/film12.jpg";
import film13 from "../../assets/imgs/film13.png";
import film14 from "../../assets/imgs/film14.jpg";
import film15 from "../../assets/imgs/film15.jpg";
import film16 from "../../assets/imgs/film16.jpg";
import film17 from "../../assets/imgs/film17.jpeg";
import adv1 from "../../assets/imgs/adv1.jpg";
import adv2 from "../../assets/imgs/adv2.jpg";
import adv3 from "../../assets/imgs/adv3.jpg";
import adv4 from "../../assets/imgs/adv4.webp";
import sifi1 from "../../assets/imgs/sifi1.jpg";
import sifi2 from "../../assets/imgs/sifi2.jpg";
import sifi3 from "../../assets/imgs/sifi3.jpg";
import horror1 from "../../assets/imgs/horror1.jpg";
import horror2 from "../../assets/imgs/horror2.jpeg";
import horror3 from "../../assets/imgs/horror3.jpg";
import horror4 from "../../assets/imgs/horror4.jpg";
function MoviesShows() {
  const cardCatigoresData = [
    {
      title: "Action",
      image: [film4, film12, film10, film17],
      sizeCard: "235px",
    },
    {
      title: "Adventure",
      image: [adv1, adv2, adv3, adv4],
      sizeCard: "235px",
    },
    {
      title: "Sci-fi",
      image: [sifi1, sifi2, sifi3, film6],
      sizeCard: "235px",
    },
    {
      title: "Drama",
      image: [film14, film13, film3, film5],
      sizeCard: "235px",
    },
    {
      title: "Horror",
      sizeCard: "235px",
      image: [horror1, horror2, horror3, horror4],
    },
  ];
  const popularCardCatigoresData = [
    {
      title: "Action",
      image: [film4, film12, film10, film17],
      sizeCard: "290px",
    },
    {
      title: "Adventure",
      image: [adv1, adv2, adv3, adv4],
      sizeCard: "290px",
    },
    {
      title: "Sci-fi",
      image: [sifi1, sifi2, sifi3, film6],
      sizeCard: "290px",
    },
    {
      title: "Drama",
      image: [film14, film13, film3, film5],
      sizeCard: "290px",
    },
  ];
  // film card data
  const viewsFilmCardData = [
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: film1,
      filmDuiration: "1h 30mins",
      filmViews: "3k",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: adv2,
      filmDuiration: "1h 54mins",
      filmViews: "5k",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: adv1,
      filmDuiration: "2h 30mins",
      filmViews: "2k",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: film2,
      filmDuiration: "1h 40mins",
      filmViews: "17k",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: film5,
      filmDuiration: "1h 36mins",
      filmViews: "3k",
    },
  ];
  const releaseFilmCardData = [
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: film6,
      releaseDate: "15 March 2002",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: sifi2,
      releaseDate: "07 April 2023",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: sifi1,
      releaseDate: "19 May 2023",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: film3,
      releaseDate: "05 Jan 2023",
    },
    {
      widthSizeCard: "18.5%",
      heightSizeCard: "300px",
      filmImg: film8,
      releaseDate: "16 October 2023",
    },
  ];
  const ratingFilmCardData = [
    {
      widthSizeCard: "23%",
      heightSizeCard: "350px",
      filmImg: film13,
      releaseDate: "07 April 2023",
      filmViews: "10k",
      filmDuiration: "1h 40mins",
    },
    {
      widthSizeCard: "23%",
      heightSizeCard: "350px",
      filmImg: sifi3,
      filmViews: "20k",
      filmDuiration: "1h 40mins",
    },
    {
      widthSizeCard: "23%",
      heightSizeCard: "350px",
      filmImg: film12,
      releaseDate: "05 Jan 2023",
      filmViews: "5k",
      filmDuiration: "1h 40mins",
    },
    {
      widthSizeCard: "23%",
      heightSizeCard: "350px",
      filmImg: film6,
      releaseDate: "16 October 2023",
      filmViews: "35k",
      filmDuiration: "1h 40mins",
    },
  ];

  return (
    <>
      <Header />
      <div className="main-container-home2">
        <BannerMovie
          backgroundMovieBanner={film4}
          titleMovieBanner="Avengers: Endgame"
          descMovieBanner="With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
        />
        <div className="container-movies-shows">
          <div className="container-movies-shows-content">
            <div className="red-catig center-flex">Movies</div>

            <div className="flexSlider">
              <div className="title-movies">
                <HeaderDesc className="" title="Our Genres" />
              </div>
              <SliderCatigores />
            </div>
            <div className="scroll-container">
              <div className="flexCardsMoviesPage">
                {cardCatigoresData.map((data, index) => (
                  <CardCatigores
                    key={index}
                    title={data.title}
                    image={data.image}
                    sizeCard={data.sizeCard}
                  />
                ))}
              </div>
            </div>
            <div className="flexSlider">
              <div className="title-movies">
                <HeaderDesc className="" title="Popular 10 In Geners" />
              </div>
              <SliderCatigores />
            </div>
            <div className="scroll-container">
              <div className="flexCardsMoviesPage">
                {popularCardCatigoresData.map((data, index) => (
                  <CardCatigores
                    key={index}
                    showDiv={true}
                    classNaame="red-trending show-hide"
                    title={data.title}
                    image={data.image}
                    sizeCard={data.sizeCard}
                  />
                ))}
              </div>
            </div>
            {/* end of popular movies */}
            <div className="flexSlider">
              <div className="title-movies">
                <HeaderDesc className="" title="Trending Now" />
              </div>
              <SliderCatigores />
            </div>
            <div className="scroll-container">
              <div className="flexCardsMoviesPage">
                {viewsFilmCardData.map((data, index) => (
                  <CardFilm
                    key={index}
                    showDiv={true}
                    classNameDuiration="duiration-film active"
                    classNameSeasons="duiration-film active"
                    classNameRelease="release-film "
                    classNameRating="duiration-film  "
                    widthSizeCard={data.widthSizeCard}
                    heightSizeCard={data.heightSizeCard}
                    filmImg={data.filmImg}
                    filmDuiration={data.filmDuiration}
                    filmViews={data.filmViews}
                    releaseDate={data.releaseDate}
                  />
                ))}
              </div>
            </div>
            {/* end of trending movies */}
            <div className="flexSlider">
              <div className="title-movies">
                <HeaderDesc className="" title="New Releases" />
              </div>
              <SliderCatigores />
            </div>
            <div className="scroll-container">
              <div className="flexCardsMoviesPage">
                {releaseFilmCardData.map((data, index) => (
                  <CardFilm
                    key={index}
                    showDiv={true}
                    classNameDuiration="duiration-film "
                    classNameSeasons="duiration-film "
                    classNameRelease="release-film active "
                    classNameRating="duiration-film  "
                    widthSizeCard={data.widthSizeCard}
                    heightSizeCard={data.heightSizeCard}
                    filmImg={data.filmImg}
                    filmDuiration={data.filmDuiration}
                    filmViews={data.filmViews}
                    releaseDate={data.releaseDate}
                  />
                ))}
              </div>
            </div>
            {/* end of release movies */}
            <div className="flexSlider">
              <div className="title-movies">
                <HeaderDesc className="" title="Must - Watch Movies" />
              </div>
              <SliderCatigores />
            </div>
            <div className="scroll-container">
              <div className="flexCardsMoviesPage">
                {ratingFilmCardData.map((data, index) => (
                  <CardFilm
                    key={index}
                    showDiv={true}
                    classNameDuiration="duiration-film active "
                    classNameSeasons="duiration-film "
                    classNameRelease="release-film  "
                    classNameRating="duiration-film active "
                    widthSizeCard={data.widthSizeCard}
                    heightSizeCard={data.heightSizeCard}
                    filmImg={data.filmImg}
                    filmDuiration={data.filmDuiration}
                    filmViews={data.filmViews}
                    releaseDate={data.releaseDate}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* end of movies content */}
        </div>
        {/* end of movies container */}
        <FreeTrialBanner />
      </div>
      {/* end of main-container-home */}
      <Footer />
    </>
  );
}
export default MoviesShows;
