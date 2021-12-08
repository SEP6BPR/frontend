//import { SelectAllRounded } from "@material-ui/icons";
import React from "react";

export const Popup = (props) => {
  return(<section className="popup">
  <div className="content">
    {/* <h2>
      {selected.Title} <span>({selected.year})</span>
    </h2>
    <p className="rating">Rating: {selected.imdbRating}</p>
    <div className="plot">
      <img src={selected.Poster} />
      <p>{selected.Plot}</p>
    </div>
    <button className="close" onClick={closePopup}>
      Close
    </button> */}

    {props.children}
  </div>
</section>)
  
};

export default Popup;
