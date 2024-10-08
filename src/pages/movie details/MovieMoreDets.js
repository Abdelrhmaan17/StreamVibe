import React from "react";
import "./movieDet.css";
import "../../assets/responsive.css";
import "../../components/ReviewStarts";
import TagsMovieMore from "../../components/TagsMovieMore";
import releaseIcon from "../../assets/imgs/dateIcon.svg";
import langIcon from "../../assets/imgs/languagesIcon.svg";
import ratingIcon from "../../assets/imgs/ratingIcon.svg";
import gernesIcon from "../../assets/imgs/gernesIcon.svg";
import ReviewStarts from "../../components/ReviewStarts";
import vinceDirector from "../../assets/imgs/vinceDirector.jpg";
import bbMusic from "../../assets/imgs/BBMusic.jpeg";
import { Link, useLocation } from "react-router-dom";

const MovieMoreDets = ({
  releaseYear,
  movieGerens,
  movieDirector,
  movieMusic,
}) => {
  let tagContentData = [
    { tagContent: "English" },
    { tagContent: "Arabic" },
    { tagContent: "France" },
    { tagContent: "Hindi" },
  ];
  let tagContentGernesData = [
    { tagContent: "Drama" },
    { tagContent: "Action" },
  ];
  const location = useLocation();
  const {filmCat, filmReleaseDate } =
    location.state;
  return (
    <div className="movie-details-more">
      <div className="lang-translate">
        <h3 className="titleMoreDets">
          <img style={{ marginBottom: "5px" }} src={releaseIcon} /> Released
          Year
        </h3>
        <p
          style={{
            color: "white",
            marginBottom: "20px",
            fontSize: "1.6rem",
            width: "fit-content",
          }}
        >
          {filmReleaseDate}
        </p>
        <h3 className="titleMoreDets">
          <img style={{ marginBottom: "5px" }} src={gernesIcon} /> Gernes
        </h3>
        <div className="flex" style={{ marginBottom: "20px" }}>
          <TagsMovieMore tagContent={filmCat} />
        </div>
        <h3 className="titleMoreDets">
          <img style={{ marginBottom: "5px" }} src={langIcon} /> Available
          Languages
        </h3>
        {/* <TagsMovieMore tagContent="English"/> */}
        <div className="imdb-stream flex" style={{ marginBottom: "20px" }}>
          {tagContentData.map((data, index) => (
            <TagsMovieMore key={index} tagContent={data.tagContent} />
          ))}
        </div>
        <h3 className="titleMoreDets">
          <img style={{ marginBottom: "5px" }} src={ratingIcon} /> Rating
        </h3>
        <div className="flex imdb-stream" style={{ marginBottom: "20px" }}>
          <div className="ratingMoreMovie">
            <p style={{ color: "white", marginBottom: "10px" }}>IMDB</p>
            <ReviewStarts filmViews="5" />
          </div>
          <div className="ratingMoreMovie">
            <p style={{ color: "white", marginBottom: "10px" }}>Steamvibe</p>
            <ReviewStarts filmViews="5" />
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div>
        <h3 className="titleMoreDets">Director</h3>
        <div className="person-card">
          <img className="person-img" src={vinceDirector} />
          <div>
            <h2 className="movie-review-box-h2">Vince Giligan</h2>
            <h3 className="movie-review-box-h3">From USA</h3>
          </div>
        </div>
        <h3 className="titleMoreDets">Music</h3>
        <div className="person-card">
          <img className="person-img" src={bbMusic} />
          <div>
            <h2 className="movie-review-box-h2">Dave Porter</h2>
            <h3 className="movie-review-box-h3">From USA</h3>
          </div>
        </div>
      </div>
    </div>
    // end of movie details
  );
};
export default MovieMoreDets;
