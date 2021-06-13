import React from "react";
import "../css/NameSymbol.css";

function NameSymbol(props) {
  const inputComp = (
    <input
      value={props?.inputValue}
      onKeyDown={props?.handleKeyDown ?? null}
      placeholder={props.input}
      onChange={props?.handleInputChange}
      type={props?.isNumber ? "number" : "text"}
    />
  );

  return (
    <div className="NameSymbol">
      <label>{props.label}</label>
      {props?.isIncrement ? (
        <div className="input-inc">
          {inputComp}
          <div className="input-inc-icon-container">
            <p className="input-inc-icon" onClick={props?.handleIncrementClick}>
              <i className="fa fa-chevron-up"></i>
            </p>
            <p className="input-inc-icon" onClick={props?.handleDecrementClick}>
              <i className="fa fa-chevron-down"></i>
            </p>
          </div>
        </div>
      ) : (
        inputComp
      )}
    </div>
  );
}

export default NameSymbol;
