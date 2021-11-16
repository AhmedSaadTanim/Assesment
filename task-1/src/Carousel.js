import "bootstrap/dist/js/bootstrap.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "./images/bg.jpeg";

const Carousel = () => {
  const arrow1 = <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>;
  const arrow2 = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>;

  return (
    <div className="custom-carousel">
      <div className="carousel-view">
        <div className="carousel-text">
          <h1>A picture is worth a thousand words</h1>
          <h2>
            {" "}
            It clearly and beautifully captures your emotions- the joy, the
            laughter, the tears, you name it. Our pride is in offering the best
            shoots as we help you tell your story in photos.
          </h2>
          <button className="view-gallery">View Gallery</button>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <div className="carousel-control-custom">{arrow1}</div>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <div className="carousel-control-custom">{arrow2}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
