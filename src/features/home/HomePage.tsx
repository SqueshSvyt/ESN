import "../../styles/style.css";
import redElips from "../../img/svg/red-elips.svg";
import blueElips from "../../img/svg/blue-elips.svg";
import greenElips from "../../img/svg/green-elips.svg";
import line from "../../img/svg/line_home.svg";
import home_info_1 from "../../img/svg/home-info-1.svg";
import home_info_2 from "../../img/svg/home-info-2.svg";
import home_info_3 from "../../img/svg/home-info-3.svg";
import NavBar from "../nav-bar/NavBar";

export default function HomePage() {
  return (
    <>
      <div className="page-class">
        <NavBar />
        <section className="home gang">
          <div className="group">
            <div>
              <img src={redElips} alt="red-elips" />{" "}
              <h1>&nbsp;&nbsp; Educational</h1>
            </div>
            <div>
              <img src={blueElips} alt="blue-elips" />{" "}
              <h1>&nbsp;&nbsp; Social</h1>
            </div>
            <div>
              <img src={greenElips} alt="green-elips" />{" "}
              <h1>&nbsp;&nbsp; Network</h1>
            </div>
          </div>
        </section>
        <section className="home graph">
          <img src={line} className="line" />
          <div className="container">
            <div className="item">Explore</div>
            <div className="item">Contend</div>
            <div className="item">Inspire</div>
            <div className="item">Organize</div>
          </div>
        </section>
        <section className="home info">
          <div className="group">
            <div className="row">
              <img src={home_info_1} alt="home_info_1" />
              <div>
                <h2>Different activities</h2>
                <p>
                  текст про актівітіс, який має написати БА, тра ля ля тра ля ля
                  тра ля ля тра ля ля тра ля ля тра ля ля
                </p>
              </div>
            </div>

            <div className="row">
              <div>
                <h2>Interactive community</h2>
                <p>
                  текст про комуніті, який має написати БА, тра ля ля тра ля ля
                  тра ля ля тра ля ля тра ля ля тра ля ля
                </p>
              </div>
              <img src={home_info_2} alt="home_info_2" />
            </div>

            <div className="row">
              <img src={home_info_3} alt="home_info_3" />
              <div>
                <h2>Job offers</h2>
                <p>
                  текст про роботу, який має написати БА, тра ля ля тра ля ля
                  тра ля ля тра ля ля тра ля ля тра ля ля
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
