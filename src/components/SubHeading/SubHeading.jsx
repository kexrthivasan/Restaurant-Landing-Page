import React from "react";
import { images } from "../../constants";

const SubHeading = ({title}) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormoran title">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__image" />
  </div>
);

export default SubHeading;
