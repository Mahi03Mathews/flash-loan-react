import React, { useState } from "react";
import "../css/CryptoFilter.css";

function CryptoFilter(props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="cryptofilter crypto-filter"
      onClick={() => setShowMenu((prevState) => !prevState)}
    >
      <div
        className={`crypto-filter-label${
          showMenu ? " crypto-filter-label--showMenu" : ""
        }`}
      >
        {props?.selectedItem}
        <i className="fa fa-chevron-down"></i>
      </div>
      {showMenu &&
        props?.optionsList?.map((item, index) =>
          item !== props?.selectedItem ? (
            <div
              key={`item-${index}`}
              className="crypto-filter-listItem"
              onClick={() => props?.handleOptionChange(item)}
            >
              {item}
            </div>
          ) : null
        )}
    </div>
  );
}

export default CryptoFilter;
