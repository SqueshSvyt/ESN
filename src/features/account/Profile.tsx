import NavBar from "../nav-bar/NavBar";
import "../../styles/style.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <NavBar />
      <div className="background-style">
        <div className="Profile">
          <div className="Profile-pillow left">
            <img alt="profile picture"/>
            <button>Profile</button>
            <button>Privacy</button>
            <button>Notifications</button>
            <button>Settings</button>
          </div>
          <div className="helper">
            <div className="Profile-pillow top">
              <div className="items">
                <div>Posts</div>
                <div>3</div>
              </div>
              <div className="items">
                <div>Following</div>
                <div>15</div>
              </div>
              <div className="items">
                <div>Followers</div>
                <div>0</div>
              </div>
            </div>
            <div className="Profile-pillow bot">
                <ul>
                    <li><span>Name</span><input placeholder="Skele King II" disabled={true}></input></li>
                    <li><span>Username</span><input placeholder="skeletron_mlg" disabled={true}></input></li>
                    <li><span>Bio</span><input disabled={true}></input></li>
                    <li><span>Gender</span><input disabled={true}></input></li>
                    <li><span>Link</span><input disabled={true}></input></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
