import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoe"
      />
      <div className="card-details">
        <h3 className="card-title">Shoe</h3>
        <section className="card-reviews">
          <div className="flex space-x-1">
            <AiFillStar className="rating-star " />
            <AiFillStar className="rating-star " />
            <AiFillStar className="rating-star " />
            <AiFillStar className="rating-star " />
          </div>
          <span className="total-reviews">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>₹300</del>200
          </div>

          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
