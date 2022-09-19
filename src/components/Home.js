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

  const handleBackButtonClick = () => {
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

  const pictureFullStylingOne = {
    position: fullOne && "absolute",
    left: fullOne && "0px",
    top: fullOne && "0px",
    width: fullOne && "50%",
    marginLeft: fullOne && "0%",
    zIndex: fullOne && "500",
    boxShadow: fullOne && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingTwo = {
    position: fullTwo && "absolute",
    left: fullTwo && "0px",
    top: fullTwo && "0px",
    width: fullTwo && "50%",
    marginLeft: fullTwo && "0%",
    zIndex: fullTwo && "500",
    boxShadow: fullTwo && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingThree = {
    position: fullThree && "absolute",
    left: fullThree && "0px",
    top: fullThree && "0px",
    width: fullThree && "50%",
    marginLeft: fullThree && "0%",
    zIndex: fullThree && "500",
    boxShadow: fullThree && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingFour = {
    position: fullFour && "absolute",
    left: fullFour && "0px",
    top: fullFour && "0px",
    width: fullFour && "50%",
    marginLeft: fullFour && "0%",
    zIndex: fullFour && "500",
    boxShadow: fullFour && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingFive = {
    position: fullFive && "absolute",
    left: fullFive && "0px",
    top: fullFive && "0px",
    width: fullFive && "50%",
    marginLeft: fullFive && "0%",
    zIndex: fullFive && "500",
    boxShadow: fullFive && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingSix = {
    position: fullSix && "absolute",
    left: fullSix && "0px",
    top: fullSix && "0px",
    width: fullSix && "50%",
    marginLeft: fullSix && "0%",
    zIndex: fullSix && "500",
    boxShadow: fullSix && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingSeven = {
    position: fullSeven && "absolute",
    left: fullSeven && "0px",
    top: fullSeven && "0px",
    width: fullSeven && "50%",
    marginLeft: fullSeven && "0%",
    zIndex: fullSeven && "500",
    boxShadow: fullSeven && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingEight = {
    position: fullEight && "absolute",
    left: fullEight && "0px",
    top: fullEight && "0px",
    width: fullEight && "50%",
    marginLeft: fullEight && "0%",
    zIndex: fullEight && "500",
    boxShadow: fullEight && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingNine = {
    position: fullNine && "absolute",
    left: fullNine && "0px",
    top: fullNine && "0px",
    width: fullNine && "50%",
    marginLeft: fullNine && "0%",
    zIndex: fullNine && "500",
    boxShadow: fullNine && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
  };
  const pictureFullStylingTen = {
    position: fullTen && "absolute",
    left: fullTen && "0px",
    top: fullTen && "0px",
    width: fullTen && "50%",
    marginLeft: fullTen && "0%",
    zIndex: fullTen && "500",
    boxShadow: fullTen && "inset 0 0 0 1000px rgba(0, 0, 0, .20)",
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
            <div className="art" onClick={handleButtonClick}>
              Art
            </div>
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
        {fullOne && (
          <div className="one-outer">
            <div className="box">
              <p className="box-name">Jacopo Della Quercia</p>
              <p className="box-header">San Petronio</p>
              <p className="box-subtext">
                On 28 March 1425 Jacopo della Quercia was commissioned to design
                a complicated portal for the west façade of San Petronio, a late
                medieval church, located in the very heart of the papal states.
                He produced a design for a round-arched entranceway framed by
                historiated pilasters with Old Testament reliefs, eighteen busts
                of prophets, five New Testament reliefs in the architrave above
                the door, decorative colonnettes and a lunette above the door
                containing free-standing statues of the Virgin and Child, St
                Petronius and the patron, Cardinal Lodovico Alemanno, papal
                legate to Bologna. The Virgin and Child, the prophet busts, the
                lintel reliefs and the colonnettes were all carved first, during
                the period 1426-September 1428, while the Old Testament scenes
                and St Petronius were added in 1429/30.
              </p>
            </div>
          </div>
        )}
        {fullTwo && (
          <div className="two-outer">
            <div className="box">
              <p className="box-name">Ecstasy of Saint Teresa</p>
              <p className="box-header">Bernini</p>
              <p className="box-subtext">
                The Ecstasy of Saint Teresa (also known as Saint Teresa in
                Ecstasy or the Transverberation of Saint Teresa; Italian:
                L'Estasi di Santa Teresa or Santa Teresa in estasi) is a
                sculptural group in white marble set in an elevated aedicule in
                the Cornaro Chapel of the church of Santa Maria della Vittoria
                in Rome. It was designed and completed by Gian Lorenzo Bernini,
                the leading sculptor of his day, who also designed the setting
                of the Chapel in marble, stucco and paint. It is generally
                considered to be one of the sculptural masterpieces of the High
                Roman Baroque. The sculpture depicts Teresa of Ávila, a Spanish
                Carmelite nun and saint, swooning in a state of religious
                ecstasy, while an angel holding a spear stands over her.
              </p>
            </div>
          </div>
        )}
        {fullThree && (
          <div className="three-outer">
            <div className="box">
              <p className="box-name">Equestrian Statue</p>
              <p className="box-header">Leonardo da Vinci</p>
              <p className="box-subtext">
                Leonardo's Horse (also known as the Sforza Horse or the Gran
                Cavallo ("Great Horse") ) is a project for a bronze sculpture
                that was commissioned from Leonardo da Vinci in 1482 by the Duke
                of Milan Ludovico il Moro, but never completed. It was intended
                to be the largest equestrian statue in the world, a monument to
                the duke's father Francesco Sforza. Leonardo did extensive
                preparatory work for it but produced only a large clay model,
                which was later destroyed.
              </p>
            </div>
          </div>
        )}
        {fullFour && (
          <div className="four-outer">
            <div className="box">
              <p className="box-name">pieta</p>
              <p className="box-header">Michelangelo</p>
              <p className="box-subtext">
                The Pietà (Italian: [pjeˈta]; 1498–1499) is a key work of
                Italian Renaissance sculpture by Michelangelo Buonarroti, now in
                St. Peter's Basilica, Vatican City. It is the first of a number
                of works of the same subject by the artist. The statue was
                commissioned for the French Cardinal Jean de Bilhères, who was
                the French ambassador in Rome. The sculpture, in Carrara marble,
                was made for the cardinal's funeral monument, but was moved to
                its current location, the first chapel on the north side after
                the entrance of the basilica, in the 18th century.[1] It is the
                only piece Michelangelo ever signed.
              </p>
            </div>
          </div>
        )}
        {fullFive && (
          <div className="five-outer">
            <div className="box">
              <p className="box-name">Michele</p>
              <p className="box-header">Caliani</p>
              <p className="box-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque habitant morbi tristique senectus. Et malesuada
                fames ac turpis egestas maecenas. Id volutpat lacus laoreet non.
                Sed vulputate mi sit amet mauris commodo quis imperdiet. Eu
                feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
                Consectetur libero id faucibus nisl tincidunt. Platea dictumst
                vestibulum rhoncus est pellentesque elit ullamcorper dignissim
                cras. Velit laoreet id donec ultrices tincidunt arcu non
                sodales. Purus sit amet luctus venenatis lectus magna fringilla.
                At quis risus sed vulputate odio ut. Egestas pretium aenean
                pharetra magna ac. Ullamcorper eget nulla facilisi etiam. Eu
                lobortis elementum nibh tellus molestie nunc. Id semper risus in
                hendrerit gravida rutrum quisque non tellus.
              </p>
            </div>
          </div>
        )}
        {fullSix && (
          <div className="six-outer">
            <div className="box">
              <p className="box-name">Nike</p>
              <p className="box-header">Pythokritos</p>
              <p className="box-subtext">
                The Winged Victory of Samothrace, or the Nike of Samothrace,[2]
                is a votive monument originally found on the island of
                Samothrace, north of the Aegean Sea. It is a masterpiece of
                Greek sculpture from the Hellenistic era, dating from the
                beginning of the 2nd century BCE. It is composed of a statue
                representing the goddess Niké (Victory), whose head and arms are
                missing, and its base in the shape of a ship's bow. The total
                height of the monument is 5.57 meters including the socle; the
                statue alone measures 2.75 meters. The sculpture is one of a
                small number of major Hellenistic statues surviving in the
                original, rather than Roman copies. Winged Victory has been
                exhibited at the Louvre Museum in Paris, at the top of the main
                staircase, since 1884.[3]
              </p>
            </div>
          </div>
        )}
        {fullSeven && (
          <div className="seven-outer">
            <div className="box">
              <p className="box-name">pieta</p>
              <p className="box-header">Michelangelo</p>
              <p className="box-subtext">
                The Pietà (Italian: [pjeˈta]; 1498–1499) is a key work of
                Italian Renaissance sculpture by Michelangelo Buonarroti, now in
                St. Peter's Basilica, Vatican City. It is the first of a number
                of works of the same subject by the artist. The statue was
                commissioned for the French Cardinal Jean de Bilhères, who was
                the French ambassador in Rome. The sculpture, in Carrara marble,
                was made for the cardinal's funeral monument, but was moved to
                its current location, the first chapel on the north side after
                the entrance of the basilica, in the 18th century.[1] It is the
                only piece Michelangelo ever signed.
              </p>
            </div>
          </div>
        )}
        {fullEight && (
          <div className="eight-outer">
            <div className="box">
              <p className="box-name">Trevi Fountain</p>
              <p className="box-header">Bernini</p>
              <p className="box-subtext">
                The Trevi Fountain (Italian: Fontana di Trevi) is an
                18th-century fountain in the Trevi district in Rome, Italy,
                designed by Italian architect Nicola Salvi and completed by
                Giuseppe Pannini and several others. Standing 26.3 metres (86
                ft) high and 49.15 metres (161.3 ft) wide,[1] it is the largest
                Baroque fountain in the city and one of the most famous
                fountains in the world. The fountain has appeared in several
                films, including Roman Holiday (1953); Three Coins in the
                Fountain (1954); Federico Fellini's classic, La Dolce Vita
                (1960); Sabrina Goes to Rome (1998); and The Lizzie McGuire
                Movie (2003).[2]
              </p>
            </div>
          </div>
        )}
        {fullNine && (
          <div className="nine-outer">
            <div className="box">
              <p className="box-name">unkown</p>
              <p className="box-header">unknown</p>
              <p className="box-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque habitant morbi tristique senectus. Et malesuada
                fames ac turpis egestas maecenas. Id volutpat lacus laoreet non.
                Sed vulputate mi sit amet mauris commodo quis imperdiet. Eu
                feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
                Consectetur libero id faucibus nisl tincidunt. Platea dictumst
                vestibulum rhoncus est pellentesque elit ullamcorper dignissim
                cras. Velit laoreet id donec ultrices tincidunt arcu non
                sodales. Purus sit amet luctus venenatis lectus magna fringilla.
                At quis risus sed vulputate odio ut. Egestas pretium aenean
                pharetra magna ac. Ullamcorper eget nulla facilisi etiam. Eu
                lobortis elementum nibh tellus molestie nunc. Id semper risus in
                hendrerit gravida rutrum quisque non tellus.
              </p>
            </div>
          </div>
        )}
        {fullTen && (
          <div className="ten-outer">
            <div className="box">
              <p className="box-name">Stories of Joseph</p>
              <p className="box-header">Lorenzo Ghiberti</p>
              <p className="box-subtext">
                A panel from the east doors of Florence’s Baptistery of San
                Giovanni. Made from 1425 CE by Lorenzo Ghiberti (1378-1455 CE).
                Gilded bronze. This panel shows the story of Joseph and his
                brothers. The artist Michelangelo gave the doors the nickname
                the 'Gates of Paradise' such was the craftsmanship evident in
                their production. Lorenzo Ghiberti trained as a goldsmith and
                sculptor, he established an important workshop for sculpture in
                metal. His book of Commentarii contains important writing on
                art, as well as what may be the earliest surviving autobiography
                by any artist. Ghiberti's career was dominated by his two
                successive commissions for pairs of bronze doors to the Florence
                Baptistery (Battistero di San Giovanni). They are recognized as
                a major masterpiece of the Early Renaissance, and were famous
                and influential from their unveiling.
              </p>
            </div>
          </div>
        )}

        {fullOne ||
        fullTwo ||
        fullThree ||
        fullFour ||
        fullFive ||
        fullSix ||
        fullSeven ||
        fullEight ||
        fullNine ||
        fullTen ? (
          <div className="back-button" onClick={handleBackButtonClick}>
            <BsArrowUpRight className="back-button-arrow" />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Home;
