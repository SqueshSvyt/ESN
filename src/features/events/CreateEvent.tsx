import NavBar from "../nav-bar/NavBar";
import plus from "../../img/svg/plus.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month: number | string = today.getMonth() + 1;
    let day: number | string = today.getDate();
  
    // Add leading zeros if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`;
  };
  
  
  return (
    <div className="page-class">
      <NavBar />
      <div className="createEvent">
        {page === 0 ? (
          <>
            <div className="createEvent__body">
              <span className="createEvent__label">Create Event</span>
              <div className="createEvent__field">
                <h2>Title</h2>
                <div className="createEvent__line"></div>
                <form>
                  <textarea placeholder="Create a title for your event(no more than 50 words )"></textarea>
                </form>
                <div className="createEvent__line"></div>
                <div className="createEvent__bottom">
                  <img src={plus} alt="plus" />
                  <h2>Add Picture</h2>
                </div>
              </div>
              <div className="createEvent__field">
                <h2>Description</h2>
                <div className="createEvent__line"></div>
                <form>
                  <textarea placeholder="Create a description for your event(no more than 150 words )"></textarea>
                </form>
                <div className="createEvent__line"></div>
                <h2>Tags</h2>
              </div>
            </div>
            <div className="createEvent__pagination">
              <div
                onClick={() => {
                  setPage(1);
                }}
              >
                <p className="createEvent__pagination__next">Next</p>
              </div>
              <div
                onClick={() => {
                  navigate("/");
                }}
              >
                <span>Cancel</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="createEvent__body">
              <span className="createEvent__label">Create Event</span>
              <div className="createEvent__field2">
                <div className="createEvent__field2__innerbody">
                  <div className="createEvent__field2__date">
                    <p>Date & Time</p>
                    <input type="date"  id="datePickerId" min={getCurrentDate()}/>
                  </div>
                  <div className="createEvent__field2__price">
                    <p>Price</p>
                    <input type="number" ></input><span className="UAH">UAH</span>
                    <input type="checkbox"></input><span>Free</span>
                  </div>
                  <div className="createEvent__field2__address">
                    <p>Address</p>
                    <input type="text"></input>
                    <input type="checkbox"></input><span>Online</span>
                  </div>
                  <div className="createEvent__field2__link">
                    <p>Link</p>
                    <input ></input>Доробити тут дропдаун і замінити чекбокси
                    <input type="checkbox"></input><span>Online</span>
                  </div>
                </div>
                <div className="createEvent__field2__idk">
                    <p></p>
                    <textarea ></textarea>
                  </div>
                <div className="createEvent__line2"></div>
              </div>
            </div>

            <div className="createEvent__pagination">
              <div
                onClick={() => {
                  setPage(1);
                }}
              >
                <div className="createEvent__submit">Submit</div>
              </div>
              <div
                onClick={() => {
                  navigate("/");
                }}
              >
                <span>Cancel</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
