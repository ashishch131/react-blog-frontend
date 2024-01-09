import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featureWrapper">
        <div className="featureLeft">
          <h1 className="featureTitle">Explore new perspectives</h1>
          <p className="featureDesc">
            Read and share ideas from independent voices, world-class
            developers, and experts from around the globe, Everyone's welcome.{" "}
            <span>Learn more.</span>
          </p>
          <button className="featuredBtn">Get Started</button>
        </div>
        <div className="featureRight">
          <img
            className="featureImg"
            src="https://cdn.dribbble.com/userupload/11414233/file/original-af21d6858ac7548e4ddb1df60bfb25dd.jpg?resize=752x752&vertical=center"
            alt=""
           
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
