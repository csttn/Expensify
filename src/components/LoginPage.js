import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p className="box-layout__subtitle">Hora de controlar suas despesas!</p>
        <button className="box-layout__button" onClick={startLogin}>
          Login com <span className="box-layout__button_span">Google</span>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
