import React, { useState } from "react";
import "./scss/index.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export const Filters = ({ isHidden, setHidden }) => {
  // const [hidden, setHidden]=useState(true);
  const [ischecked, setChecked] = useState(false);
  const [rating, setRating] = useState(false);
  const [isSticting, setSticting] = useState(false);
  const [isPricing, setPricing] = useState(false);

  const handleChange = () => {
    setChecked(true);
  };
  const handleRating = () => {
    setRating(true);
  };
  const handleStitching = () => {
    setSticting(true);
  };
  const handlePricing = () => {
    setPricing(true);
  };
  // console.log(checked);
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  // console.log(height);
  return (
    <div className="">
      <div
        className={isHidden ? "filter-back hidden" : "filter-back"}
        style={{ height: height }}
      >
        <div className="filter-main">
          <a id="filter"></a>

          <div className="filter-main__header">
            <CloseOutlinedIcon
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => setHidden(true)}
              className="cross-btn"
            />

            <p>Filters</p>
          </div>
          <div className="filter-main__body">
            <h1>Products</h1>
            <div className="filter__list">
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Kurti</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Kurti</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Blouse</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Blouse</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Lehnga</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Lehnga</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Sari</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Sari</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Kurti</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Kurti</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Blouse</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Blouse</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Lehnga</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Lehnga</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Sari</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Sari</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Kurti</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Kurti</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Blouse</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Blouse</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Lehnga</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Lehnga</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Sari</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Sari</label>
              </div>
            </div>
          </div>
          <div className="filter-main__body">
            <h1>Extra</h1>
            <div className="filter__list">
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Wedding</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Bigger size Specialist</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Uniform Specialist</label>
              </div>
            </div>
          </div>
          <div className="filter-main__body">
            <h1>Appointment</h1>
            <div className="filter__list">
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>Online</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="" />
                <label>My Place</label>
              </div>
              <div className="filter__list--item">
                <input type="checkbox" name="" id="shops" />
                <label htmlFor="shops">Shops</label>
              </div>
              <div className="filter__list--item">
                <input
                  type="checkbox"
                  name="time"
                  id="time"
                  value="time"
                  checked={ischecked}
                  onChange={handleChange}
                />
                <label htmlFor="time">Timing</label>
              </div>
              <div className="filter__list--item">
                <input
                  type="checkbox"
                  name="rating"
                  id="rating"
                  value="rating"
                  checked={rating}
                  onChange={handleRating}
                />
                <label htmlFor="rating">Rating</label>
              </div>
              <div className="filter__list--item">
                <input
                  type="checkbox"
                  checked={isSticting}
                  onChange={handleStitching}
                  name="stitching"
                  id="stitching"
                  value="stitching"
                />
                <label htmlFor="stitching"> Stitching</label>
              </div>
              <div className="filter__list--item">
                <input
                  type="checkbox"
                  name="pricing"
                  id="pricing"
                  value="pricing"
                  checked={isPricing}
                  onChange={handlePricing}
                />
                <label htmlFor="pricing"> Pricing</label>
              </div>
            </div>
          </div>
          <div className="filter-main__lower">
            <button className="clear-btn">clear</button>
            <button className="show-result-btn" onClick={() => setHidden(true)}>
              show results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
