import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

function Home() {
  const [myClicked, setMyClicked] = useState(false);
  const [myClickedLoaded, setMyClickedLoaded] = useState(false);
  const [myClickedLoadedTwo, setMyClickedLoadedTwo] = useState(false);
  const [myClickedLoadedThree, setMyClickedLoadedThree] = useState(false);
  const [myClickedLoadedFour, setMyClickedLoadedFour] = useState(false);
  const [myClickedLoadedFive, setMyClickedLoadedFive] = useState(false);
  const [myClickedLoadedSix, setMyClickedLoadedSix] = useState(false);
  const [myClickedLoadedSeven, setMyClickedLoadedSeven] = useState(false);
  const [myClickedLoadedEight, setMyClickedLoadedEight] = useState(false);
  const [myClickedLoadedNine, setMyClickedLoadedNine] = useState(false);
  const [myClickedLoadedTen, setMyClickedLoadedTen] = useState(false);

  const [fullOne, setFullOne] = useState(false);
  const [fullTwo, setFullTwo] = useState(false);
  const [fullThree, setFullThree] = useState(false);
  const [fullFour, setFullFour] = useState(false);
  const [fullFive, setFullFive] = useState(false);
  const [fullSix, setFullSix] = useState(false);
  const [fullSeven, setFullSeven] = useState(false);
  const [fullEight, setFullEight] = useState(false);
  const [fullNine, setFullNine] = useState(false);
  const [fullTen, setFullTen] = useState(false);

  // mouse functionality
  let mouseCursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", cursor);
  function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  }

  const handleLogoClick = () => {
    setMyClicked(false);
    setMyClickedLoaded(false);
    setMyClickedLoadedTwo(false);
    setMyClickedLoadedThree(false);
    setMyClickedLoadedFour(false);
    setMyClickedLoadedFive(false);
    setMyClickedLoadedSix(false);
    setMyClickedLoadedSeven(false);
    setMyClickedLoadedEight(false);
    setMyClickedLoadedNine(false);
    setMyClickedLoadedTen(false);

    setFullOne(false);
    setFullTwo(false);
    setFullThree(false);
    setFullFour(false);
    setFullFive(false);
    setFullSix(false);
    setFullSeven(false);
    setFullEight(false);
    setFullNine(false);
    setFullTen(false);
  };
  const handleButtonClick = () => {
    setMyClicked(true);
    setTimeout(() => {
      setMyClickedLoaded(true);
    }, 1000);
    setTimeout(() => {
      setMyClickedLoadedTwo(true);
    }, 1100);
    setTimeout(() => {
      setMyClickedLoadedThree(true);
    }, 1200);
    setTimeout(() => {
      setMyClickedLoadedFour(true);
    }, 1300);
    setTimeout(() => {
      setMyClickedLoadedFive(true);
    }, 1400);
    setTimeout(() => {
      setMyClickedLoadedSix(true);
    }, 1500);
    setTimeout(() => {
      setMyClickedLoadedSeven(true);
    }, 1600);
    setTimeout(() => {
      setMyClickedLoadedEight(true);
    }, 1700);
    setTimeout(() => {
      setMyClickedLoadedNine(true);
    }, 1800);
    setTimeout(() => {
      setMyClickedLoadedTen(true);
    }, 1900);
  };

  const pictureFullStylingOne = {
    position: fullOne && "absolute",
    left: fullOne && "0px",
    top: fullOne && "0px",
    width: fullOne && "50%",
    marginLeft: fullOne && "0%",
  };
  const pictureFullStylingTwo = {
    position: fullTwo && "absolute",
    left: fullTwo && "0px",
    top: fullTwo && "0px",
    width: fullTwo && "50%",
    marginLeft: fullTwo && "0%",
  };
  const pictureFullStylingThree = {
    position: fullThree && "absolute",
    left: fullThree && "0px",
    top: fullThree && "0px",
    width: fullThree && "50%",
    marginLeft: fullThree && "0%",
  };
  const pictureFullStylingFour = {
    position: fullFour && "absolute",
    left: fullFour && "0px",
    top: fullFour && "0px",
    width: fullFour && "50%",
    marginLeft: fullFour && "0%",
  };
  const pictureFullStylingFive = {
    position: fullFive && "absolute",
    left: fullFive && "0px",
    top: fullFive && "0px",
    width: fullFive && "50%",
    marginLeft: fullFive && "0%",
  };
  const pictureFullStylingSix = {
    position: fullSix && "absolute",
    left: fullSix && "0px",
    top: fullSix && "0px",
    width: fullSix && "50%",
    marginLeft: fullSix && "0%",
  };
  const pictureFullStylingSeven = {
    position: fullSeven && "absolute",
    left: fullSeven && "0px",
    top: fullSeven && "0px",
    width: fullSeven && "50%",
    marginLeft: fullSeven && "0%",
  };
  const pictureFullStylingEight = {
    position: fullEight && "absolute",
    left: fullEight && "0px",
    top: fullEight && "0px",
    width: fullEight && "50%",
    marginLeft: fullEight && "0%",
  };
  const pictureFullStylingNine = {
    position: fullNine && "absolute",
    left: fullNine && "0px",
    top: fullNine && "0px",
    width: fullNine && "50%",
    marginLeft: fullNine && "0%",
  };
  const pictureFullStylingTen = {
    position: fullTen && "absolute",
    left: fullTen && "0px",
    top: fullTen && "0px",
    width: fullTen && "50%",
    marginLeft: fullTen && "0%",
  };

  return (
    <>
      <Spline
        scene="https://prod.spline.design/1ZSN0NOpjyVsaPIf/scene.splinecode"
        className="sculpture"
      />
      <div className="background-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus
        orci ac auctor augue mauris augue. Vulputate eu scelerisque felis
        imperdiet proin fermentum leo vel orci. Elit sed vulputate mi sit.
        Laoreet suspendisse interdum consectetur libero id faucibus nisl
        tincidunt eget. Magna eget est lorem ipsum dolor sit amet consectetur
        adipiscing. Facilisis gravida neque convallis a cras semper auctor
        neque. Porta lorem mollis aliquam ut porttitor leo a diam. Nulla
        pharetra diam sit amet. Proin nibh nisl condimentum id venenatis a
        condimentum. Et malesuada fames ac turpis egestas integer eget aliquet
        nibh. Fames ac turpis egestas integer. Tincidunt vitae semper quis
        lectus nulla at volutpat diam. Sem fringilla ut morbi tincidunt augue
        interdum velit euismod. Suspendisse faucibus interdum posuere lorem.
        Elementum tempus egestas sed sed risus. Sed turpis tincidunt id aliquet.
        Vitae ultricies leo integer malesuada nunc vel risus commodo. Ut
        consequat semper viverra nam libero justo laoreet sit amet. Convallis a
        cras semper auctor neque vitae tempus quam. Faucibus purus in massa
        tempor nec feugiat nisl pretium. Congue quisque egestas diam in arcu
        cursus euismod quis. Consectetur adipiscing elit pellentesque habitant
        morbi. Tincidunt praesent semper feugiat nibh sed pulvinar proin
        gravida. Diam sollicitudin tempor id eu nisl nunc. A arcu cursus vitae
        congue mauris. Interdum posuere lorem ipsum dolor. Odio ut sem nulla
        pharetra diam sit amet. Est velit egestas dui id ornare. Mauris sit amet
        massa vitae tortor condimentum lacinia quis vel. Turpis tincidunt id
        aliquet risus feugiat. Magna fringilla urna porttitor rhoncus dolor
        purus. Adipiscing diam donec adipiscing tristique. In aliquam sem
        fringilla ut morbi tincidunt. Cras fermentum odio eu feugiat pretium.
        Dolor sit amet consectetur adipiscing elit pellentesque habitant. Vitae
        elementum curabitur vitae nunc. Sit amet mauris commodo quis imperdiet
        massa tincidunt nunc pulvinar. Fames ac turpis egestas maecenas. Tempor
        orci dapibus ultrices in iaculis nunc sed augue. Eleifend donec pretium
        vulputate sapien nec sagittis aliquam malesuada bibendum. Nunc id cursus
        metus aliquam eleifend mi in nulla posuere. Leo integer malesuada nunc
        vel risus. Dolor morbi non arcu risus quis. Ultrices eros in cursus
        turpis massa tincidunt dui. Purus viverra accumsan in nisl nisi
        scelerisque. In ornare quam viverra orci sagittis. Nibh cras pulvinar
        mattis nunc sed blandit libero volutpat. Aliquam purus sit amet luctus.
        Turpis massa sed elementum tempus egestas. A diam sollicitudin tempor id
        eu nisl nunc. Nec dui nunc mattis enim ut tellus. Leo integer malesuada
        nunc vel risus commodo. Et egestas quis ipsum suspendisse ultrices.
        Quisque non tellus orci ac auctor augue mauris. Scelerisque felis
        imperdiet proin fermentum leo vel orci. Non pulvinar neque laoreet
        suspendisse. Arcu non odio euismod lacinia at quis risus sed. Risus
        feugiat in ante metus dictum at. Ridiculus mus mauris vitae ultricies
        leo integer. Nunc non blandit massa enim nec dui nunc mattis enim.
        Senectus et netus et malesuada fames. In nulla posuere sollicitudin
        aliquam ultrices sagittis orci. Neque laoreet suspendisse interdum
        consectetur libero. Quam adipiscing vitae proin sagittis. Accumsan
        tortor posuere ac ut consequat. Morbi leo urna molestie at elementum eu
        facilisis sed. Proin sagittis nisl rhoncus mattis. Egestas diam in arcu
        cursus euismod quis. Netus et malesuada fames ac turpis egestas integer
        eget. Morbi tempus iaculis urna id volutpat. Sapien nec sagittis aliquam
        malesuada bibendum arcu. Felis bibendum ut tristique et egestas quis
        ipsum suspendisse ultrices. Faucibus interdum posuere lorem ipsum dolor
        sit amet. Leo urna molestie at elementum eu. Id venenatis a condimentum
        vitae sapien pellentesque habitant morbi tristique. Dolor sit amet
        consectetur adipiscing elit duis. Suspendisse potenti nullam ac tortor
        vitae purus faucibus. Ipsum suspendisse ultrices gravida dictum fusce
        ut. Magna fringilla urna porttitor rhoncus. Tincidunt augue interdum
        velit euismod. Nunc scelerisque viverra mauris in aliquam sem fringilla
        ut. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
        Congue quisque egestas diam in arcu cursus. Dui id ornare arcu odio ut
        sem nulla pharetra diam. Quis commodo odio aenean sed adipiscing diam
        donec. Placerat vestibulum lectus mauris ultrices eros in cursus turpis
        massa. Malesuada fames ac turpis egestas maecenas pharetra convallis.
        Tristique et egestas quis ipsum. Turpis cursus in hac habitasse platea
        dictumst quisque sagittis purus. Tellus at urna condimentum mattis
        pellentesque id. Eget gravida cum sociis natoque penatibus et magnis.
        Pretium aenean pharetra magna ac placerat vestibulum lectus mauris
        ultrices. Est sit amet facilisis magna etiam. Nec sagittis aliquam
        malesuada bibendum arcu vitae elementum. Quis ipsum suspendisse ultrices
        gravida. Fermentum dui faucibus in ornare. Nec feugiat nisl pretium
        fusce id. Diam vulputate ut pharetra sit amet aliquam. Nisi porta lorem
        mollis aliquam ut porttitor. Molestie ac feugiat sed lectus vestibulum.
        At lectus urna duis convallis convallis tellus id. A pellentesque sit
        amet porttitor eget dolor morbi non. Consequat ac felis donec et. Ante
        metus dictum at tempor. Ullamcorper malesuada proin libero nunc. Dui
        vivamus arcu felis bibendum ut tristique. Tellus molestie nunc non
        blandit massa enim nec. Turpis in eu mi bibendum. Metus aliquam eleifend
        mi in nulla posuere sollicitudin aliquam. Parturient montes nascetur
        ridiculus mus mauris vitae ultricies. Orci eu lobortis elementum nibh
        tellus molestie nunc non. Ornare arcu dui vivamus arcu. Massa placerat
        duis ultricies lacus. Augue mauris augue neque gravida in fermentum et.
        Phasellus egestas tellus rutrum tellus. Sit amet facilisis magna etiam
        tempor. Bibendum ut tristique et egestas. Felis imperdiet proin
        fermentum leo vel orci porta. Sagittis nisl rhoncus mattis rhoncus urna
        neque viverra justo nec. Diam ut venenatis tellus in metus vulputate eu.
        Aliquam eleifend mi in nulla posuere. Eu mi bibendum neque egestas
        congue quisque egestas diam. Neque ornare aenean euismod elementum nisi
        quis eleifend. Quam pellentesque nec nam aliquam sem. Ut morbi tincidunt
        augue interdum velit. Cursus euismod quis viverra nibh cras pulvinar
        mattis nunc sed. Felis imperdiet proin fermentum leo vel orci porta non
        pulvinar. Lorem ipsum dolor sit amet. Est ullamcorper eget nulla
        facilisi etiam. Rutrum quisque non tellus orci ac auctor. Sit amet risus
        nullam eget. Arcu bibendum at varius vel pharetra. Netus et malesuada
        fames ac turpis egestas integer eget aliquet. Massa tincidunt nunc
        pulvinar sapien et ligula ullamcorper. Arcu ac tortor dignissim
        convallis aenean et tortor. Magna fermentum iaculis eu non. Sagittis
        nisl rhoncus mattis rhoncus urna neque viverra justo. Cras tincidunt
        lobortis feugiat vivamus at. Molestie nunc non blandit massa. Tortor
        dignissim convallis aenean et. Vulputate ut pharetra sit amet aliquam id
        diam maecenas ultricies. Risus commodo viverra maecenas accumsan lacus
        vel.
      </div>
      <div className="button" onClick={handleButtonClick}>
        <BsArrowUpRight className="icon" />
      </div>
      <div className="cursor"></div>

      <div className="home-outer">
        <nav className="nav">
          <div className="logo" onClick={handleLogoClick}>
            Art<br></br> Gallery
          </div>
          <div className="nav-middle">
            <div className="about nav-links">About</div>
            <div className="art">Art</div>
            <div className="contact-us">Contact Us</div>
          </div>
        </nav>

        <div className="left-banner">
          <div className="left-inner-banner">
            <div className="header">Explore Art around the world</div>
            <div className="sub-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </div>
          </div>
        </div>
        <div className="right-banner">
          <div className="green-accent"></div>
          <div className="blue-accent"></div>
        </div>
      </div>

      <div className={myClicked ? "art-outer-after" : "art-outer-before"}>
        <div
          className={
            myClickedLoaded
              ? "art-inner-after one"
              : "art-inner-before after-one"
          }
          onClick={() => setFullOne(true)}
          style={pictureFullStylingOne}
        ></div>
        <div
          className={
            myClickedLoadedTwo
              ? "art-inner-after two"
              : "art-inner-before after-two "
          }
          onClick={() => setFullTwo(true)}
          style={pictureFullStylingTwo}
        ></div>
        <div
          className={
            myClickedLoadedThree
              ? "art-inner-after three"
              : "art-inner-before after-three "
          }
          onClick={() => setFullThree(true)}
          style={pictureFullStylingThree}
        ></div>
        <div
          className={
            myClickedLoadedFour
              ? "art-inner-after four"
              : "art-inner-before after-four "
          }
          onClick={() => setFullFour(true)}
          style={pictureFullStylingFour}
        ></div>
        <div
          className={
            myClickedLoadedFive
              ? "art-inner-after five"
              : "art-inner-before after-five "
          }
          onClick={() => setFullFive(true)}
          style={pictureFullStylingFive}
        ></div>
        <div
          className={
            myClickedLoadedSix
              ? "art-inner-after six"
              : "art-inner-before after-six "
          }
          onClick={() => setFullSix(true)}
          style={pictureFullStylingSix}
        ></div>
        <div
          className={
            myClickedLoadedSeven
              ? "art-inner-after seven"
              : "art-inner-before after-seven "
          }
          onClick={() => setFullSeven(true)}
          style={pictureFullStylingSeven}
        ></div>
        <div
          className={
            myClickedLoadedEight
              ? "art-inner-after eight"
              : "art-inner-before after-eight "
          }
          onClick={() => setFullEight(true)}
          style={pictureFullStylingEight}
        ></div>
        <div
          className={
            myClickedLoadedNine
              ? "art-inner-after nine"
              : "art-inner-before after-nine "
          }
          onClick={() => setFullNine(true)}
          style={pictureFullStylingNine}
        ></div>
        <div
          className={
            myClickedLoadedTen
              ? "art-inner-after ten"
              : "art-inner-before after-ten "
          }
          onClick={() => setFullTen(true)}
          style={pictureFullStylingTen}
        ></div>
      </div>
    </>
  );
}

export default Home;
