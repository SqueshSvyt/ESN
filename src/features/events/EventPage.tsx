import { useState } from "react";
import NavBar from "../nav-bar/NavBar";
import like from "../../img/png/like.png";
import repost from "../../img/png/pplane.png";
import coment from "../../img/png/coment.png";

export default function EventPage() {
  return (
    <>
      <NavBar />
      <div className="eventpage">
        <div className="eventpage__left">
          <img src="" alt="img of event" />
          <div className="eventpage__left__inner">
            <div className="eventpage__left__title">
              <p>тут має бути текст</p>
            </div>
            <div className="eventpage__top__line"></div>
            <div className="eventpage__middle">
              <div>
                <h1>Організатори:</h1>
                <p>
                  Іван Іванов, відомий експерт з розробки програмного
                  забезпечення, технічний директор великої IT-компанії.
                </p>
              </div>
              <img alt="another_photo" />
            </div>
            <div className="eventpage__bottom">
              <h1>SoftServe Technical Weeks </h1>
              <p>
                SoftServe Technical Weeks - це захід, спрямований на поглиблене
                вивчення інноваційних технологій у сфері розробки програмного
                забезпечення. Під керівництвом визнаних експертів, таких як Іван
                Іванов, учасники отримають можливість ознайомитися з останніми
                трендами у сфері IT, дізнатися про найефективніші методи
                розробки програм, а також обмінятися досвідом з іншими
                професіоналами галузі.
              </p>
            </div>
            <div className="event__reactions flexSpaceBetween">
              <div className="reactions__block flexCenter">
                <img alt="like-img" src={like} />
                <p>Like</p>
              </div>
              <div className="reactions__block flexCenter">
                <img alt="commentimg" src={coment} />
                <p>Comment</p>
              </div>
              <div className="reactions__block flexCenter">
                <img alt="repostimg" src={repost} />
                <p>Repost</p>
              </div>
            </div>
          </div>
        </div>
        <div className="eventpage__right">
          <div>
            <p>Дата і час:</p>
            <p>Час проведення: </p>
            <p>Місце проведення: </p>
            <h3>Головні спікери</h3>
            <ul>
              <li>Іван Іванов</li>
              <li>Іван Іванов</li>
              <li>Іван Іванов</li>
            </ul>
          </div>
          <button>Register</button>
        </div>
      </div>
    </>
  );
}
