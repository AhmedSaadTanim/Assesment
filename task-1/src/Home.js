import img from "./images/sample.jpg";
const Home = () => {
  return (
    <div className="main-content">
      <div className="picture">
        <div className="sample-1 sample">
          <img src={img} alt="sample image" />
        </div>
        <div className="sample-2 sample">
          <img src={img} alt="sample image 2" />
        </div>
        <div className="sample-3 sample">
          <img src={img} alt="sample image 3" />
        </div>
      </div>
      <div className="about-us">
        <h1>About us</h1>
        <h2>
          Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
          text used in design when creating content. It helps designers plan out
          where the content will sit
        </h2>
      </div>
    </div>
  );
};

export default Home;
