import React from "react";

const mystyle = {
  marginleft: "10px",
  float: "right",
  color: "white"
};

function ViewBtn(props) {
  return (
    <a href={props.link} alt={props.title} {...props}>
      <button className="btn btn-primary view-btn" style={mystyle}>
        View
      </button>
    </a>
  );
}

export default ViewBtn;
