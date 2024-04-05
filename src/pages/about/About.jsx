import "./about.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutcontainer">
        <span className="aboutTitle">Designer & Fullstack Developer</span>
        <span className="subTitle">
          I design and code beautifully simple things, and I love what I do
        </span>
        <img
          className="avatar"
          src="https://cdn.dribbble.com/users/721159/screenshots/15220386/media/ea0f2e0fce088e54581039ceeb82212c.png?resize=768x576&vertical=center"
          alt=""
        />
        <img
          className="illustration"
          src="https://cdn.dribbble.com/userupload/10599617/file/original-8c4ca5201197826ffbd2c6a5801598a0.jpg?resize=1024x768"
          alt=""
        />
        <div className="aboutContent">
          <h1>Hi, I’m Ashish. Nice to meet you.</h1>
          <p className="intro">
            I am a creative designer and developer, who aims to work with small
            businesses and margianalized communities to bring their passions to
            life. I offer both design and development services of web
            applications or websites!
          </p>
        </div>
        <div className="aboutItems">
          <div className="aboutItem">
            <i className="fa-solid fa-layer-group" ></i>
            <h2>Designer</h2>
            <span>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </span>
            <span>Things I enjoy designing:</span>
            <span>UX, UI, Web, Apps</span>
          </div>
          <div className="aboutItem">
          <i className="fa-solid fa-file-code" ></i>
            <h2>Fullstack Developer</h2>
            <span>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </span>
            <span>Languages I speak:</span>
            <span>HTML, CSS, Sass, Tailwind, Javascript, React js, Next js, MongoDb, Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
