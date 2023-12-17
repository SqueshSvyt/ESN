import mail_icon from "../../img/svg/mail_icon_light.svg";

export default function EmailConfimation() {
  return (
    <div className="background-style">
      <div className="pillow email-confirmation">
        <div className="info">
          <img src={mail_icon} alt="mail_icon" />
          <h1>Email confirmation</h1>
          <p>We sent you an email with confirmation!</p>
        </div>
      </div>
    </div>
  );
}
