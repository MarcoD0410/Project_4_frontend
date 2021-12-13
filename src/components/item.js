import React from "react"
import { Link } from "react-router-dom";

const Item = ({list}) => {

    ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
    backgroundColor: "brown"
  };

    return  <div style={div}>
        <Link to={`/post/${list.id}`}>
            <h1>{list.item}</h1>
        </Link>
        <h2>{list.amount}</h2>
    </div>
}

export default Item;