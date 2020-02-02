import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "./numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h2 className="list-item__title">{description}</h2>
      <span className="list-item__sub-title">
        {moment(createdAt)
          .locale("pt-br")
          .format("Do MMMM, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">
      {numeral(amount / 100).format("$  0,0.00")}
    </h3>
  </Link>
);

export default ExpenseListItem;
