import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <span className="about">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="sidebarDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ea voluptatem temporibus commodi sint amet consequatur,
          nisi excepturi sequi unde accusantium culpa delectus alias! Corrupti
          vel consectetur officiis ad praesentium.
        </p>

        <span className="sidebarCatText">CATEGORIES</span>
        <div className="sideCatItems">
          <span className="catItem">Music</span>
          <span className="catItem">Fashion</span>
          <span className="catItem">Travel</span>
          <span className="catItem">Coding</span>
          <span className="catItem">Food</span>
          <span className="catItem">Sports</span>
        </div>
        <span className="follow">FOLLOW US</span>
        <div className="sideIcons">
          <img src="/1.png" alt="logo" className="SocialLogo" />
          <img src="/2.png" alt="logo" className="SocialLogo" />
          <img src="/3.png" alt="logo" className="SocialLogo" />
          <img src="/4.png" alt="logo" className="SocialLogo" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
