import { useState } from "react";
import { Event } from "../../app/models/event";
import "../../styles/style.css";
import like from "../../img/png/like.png";
import register_img from "../../img/png/register.png";
import registered_img from "../../img/png/registered.png";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  const [registered, setRegistered] = useState(false);
  // we need to pass data here

  return (
    <div className="event">
      <div className="header flexSpaceBetween">
        <div className="header__left flexCenter">
          <img alt="logo" />
          <div className="header__left__group">
            <p>{event.authorUsername}</p>
            <p>status</p>
          </div>
        </div>
        <div className="header__right">
          <img alt="menu" />
        </div>
      </div>
      <img className="event__banner" src={event.pictureUrl} alt="banner" />
      <div className="event__description flexSpaceBetween">
        <div className="event__description__left">
          <div className="event__description__date">
            <p>Дата та час: {event.time}</p>
            <p>Місце проведення: {event.place}</p>
          </div>

          <div className="speakers">
            <p>Головні спікери</p>
            <ul>
              {event.speakers.split(", ").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="event__description__right">
          <p>Опис події:</p>
          <p>{event.description}</p>
        </div>
      </div>
      <div className="event__line"></div>
      <div className="event__reactions flexSpaceBetween">
        <div className="reactions__block flexCenter">
          <img alt="like-img" src={like} />
          <p>Like</p>
        </div>
        <div className="reactions__block flexCenter">
          <img alt="reg-img" src={registered ? registered_img : register_img} />
          <p>{registered ? "Registered" : "Register"}</p>
        </div>
      </div>
    </div>
  );
}
