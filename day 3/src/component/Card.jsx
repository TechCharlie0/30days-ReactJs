import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  // Corrected the substring method and used info variable properly
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} alt={name} className="image" ></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? "Show less" : "Read more"}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not interested
      </button>
    </div>
  );
}

export default Card;
