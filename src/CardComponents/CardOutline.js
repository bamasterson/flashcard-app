import React from "react";

//styling for card
function CardOutline() {
  return (
    <div className="card my-1 ">
      <div className="card-body ">
        <h5 className="card-title animated-bg animated-bg-text">&nbsp;</h5>
        <p className="card-text animated-bg animated-bg-text">
          &nbsp;
        </p>
        <button className="btn btn-secondary disabled" disabled>
          Flip
        </button>
      </div>
    </div>
  );
}

export default CardOutline;