import React from "react";
import "./styles/locationinfo.css";
const Locationinfo = ({ location }) => {
  return (
    <article className="Location">
      <h2 className="Location__name">{location?.name}</h2>
      <ul className="Location__list">
        <li>
          <span className="span_list">type</span> {location?.type}
        </li>
        <li>
          <span className="span_list">dimension</span> {location?.dimension}
        </li>
        <li>
          <span className="span_list">population </span>
            {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default Locationinfo;
