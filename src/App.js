import "./css/Crypto.css";

import { useEffect, useState } from "react";

import FlashLoanLabel from "./components/FlashLoanLabel";
import FormScreen from "./components/FormScreen";
import SubmitScreen from "./components/SubmitScreen";
import loadWindowEthereum from "./helpers/loadWindowEthereum";
import getLoanEstimates from "./helpers/getLoanEstimates";
import { oeb, ubx } from "./constants";

function App() {
  const [sumbit, setSubmit] = useState(false);
  const [account, setAccount] = useState("");
  const [submitStateData, setSubmitStateData] = useState({
    ivm: "",
    dex: "",
    currency: "",
  });
  const [loanData, setLoanData] = useState({
    amount: 25,
    tokenFee: 0.00001,
    swapFee: 0,
    totalFee: 0,
    gain: 0,
  });

  const [ethereumErr, setEthereumErr] = useState("");
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenSymbol: "",
    network: true,
  });

  useEffect(() => {
    loadWindowEthereum({
      onLoadingFailure: () =>
        setEthereumErr("Please install MetaMask to continue."),
      setAccount: (acc) => setAccount(acc),
      onNetworkFailure: (err) =>
        err === "UNSUPPORTED_NETWORK"
          ? setEthereumErr(
              "Unsupported network detected. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Ethereum Mainnet \n- Binance Smart Chain Mainnet"
            )
          : "",
    });
  }, []);

  const setCryptoType = (value) => {
    setFormData((prevState) => {
      let newState = { ...prevState };
      newState.network = value;
      return newState;
    });
  };
  const Initiate = () => {
    setSubmitStateData((prevState) => {
      let newState = { ...prevState };
      newState.currency = formData.network ? "ETH" : "BNB";
      newState.dex = formData.network ? "Uniswap" : "PancakeSwap";
      newState.ivm = formData.network ? oeb : ubx;
      return newState;
    });
    setLoanData((prevState) => {
      let newState = { ...prevState };
      newState = {
        ...getLoanEstimates(prevState, formData.network),
        tokenFee: formData?.network ? 0.00001 : 0.00005,
      };
      return newState;
    });
    setSubmit(true);
  };
  if (ethereumErr)
    return (
      <div>
        <p className="error-text-mesg f26 show-ethereum-err">{ethereumErr}</p>
      </div>
    );
  else
    return (
      <div>
        <FlashLoanLabel />
        <div className="crypto">
          {!sumbit ? (
            <FormScreen
              setCryptoType={setCryptoType}
              onInitiate={Initiate}
              formData={formData}
              handleFormChange={(value, type) => {
                setFormData((prevState) => {
                  let newState = { ...prevState };
                  newState[type] = value;
                  return newState;
                });
              }}
            />
          ) : (
            <SubmitScreen
              accountAddress={account}
              network={formData.network}
              submitState={submitStateData}
              loanData={loanData}
              setLoanAmount={(type, amount) =>
                setLoanData((prevState) => {
                  let newState = { ...prevState };
                  if (type === "INC")
                    newState.amount = Number(newState.amount) + 1;
                  else if (type === "DEC")
                    newState.amount = Number(newState.amount) - 1;
                  else newState.amount = amount;
                  return newState;
                })
              }
            />
          )}
        </div>
      </div>
    );
}

export default App;
