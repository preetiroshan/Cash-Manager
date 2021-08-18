import { useState } from "react";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  const currencies = [1, 5, 10, 20, 100, 500, 1000, 2000];
  const [netChange, setNetChange] = useState({});

  const [bill, setBill] = useState("");
  const [cash, setCash] = useState("");
  const [showTable, setShowTable] = useState(false);
  const calculateChange = () => {
    let change = {};
    let reqdChange = cash - bill;
    for (let i = currencies.length - 1; i >= 0; i -= 1) {
      let currentCurrency = currencies[i];
      change[currentCurrency] =
        reqdChange >= currentCurrency
          ? Math.floor(reqdChange / currentCurrency)
          : 0;
      reqdChange -= change[currentCurrency] * currentCurrency;
    }
    setNetChange(change);
    setShowTable(true);
  };

  const handleClear = () => {
    setBill("");
    setCash("");
    setShowTable(false);
  };

  return (
    <div className="App">
      <h1>Cash Manager</h1>
      <h4>Enter the bill amount and cash given by customer.</h4>
      <h5>
        We will tell you the minimum number of notes to return to the customer
      </h5>

      <div className="input-container">
        <h2>Total Bill (in &#8377;)</h2>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(parseInt(e.target.value, 10))}
        />
        <br />
        <small>Please enter a non zero value for bill</small>

        {bill ? (
          <>
            <h2>Cash Given by Customer (in &#8377;)</h2>
            <input
              type="number"
              value={cash}
              onChange={(e) => setCash(parseInt(e.target.value, 10))}
            />
            <br />
            <button className="btn" onClick={calculateChange}>
              Submit
            </button>
          </>
        ) : null}
      </div>
      {showTable && (
        <>
          {cash >= bill ? (
            <>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Currency</th>
                      {currencies.map((currency, key) => (
                        <th key={key}>{currency}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>No. of notes</th>
                      {currencies.map((currency, key) => (
                        <th key={key}>{netChange[currency]}</th>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="btn" onClick={handleClear}>
                Clear
              </button>
            </>
          ) : cash ? (
            <p>Cash given cannot be less than the total bill.</p>
          ) : null}
        </>
      )}
      <Footer />
    </div>
  );
}
