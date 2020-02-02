import React from "react";
import { connect } from "react-redux";
import numeral from "./numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { Link } from "react-router-dom";

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? "despesa" : "despesas";
  const formattedExpenseTotal = numeral(expenseTotal / 100).format("$ 0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-container">
          <h1 className="page-header__title">
            {/* Visualizando <span>{expenseCount}</span> {expenseWord},  */}
            Total: <span>{formattedExpenseTotal} </span>
          </h1>
          <div className="page-header__actions">
            <Link className="page-header__button" to="/create">
              <button className="page-header__button">
                Adicione uma nova despesa
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
