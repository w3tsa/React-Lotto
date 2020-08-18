import React from "react";
import LottoBoard from "./LottoBoard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LottoBoard />
      <LottoBoard title="Mini daily" maxBalls={4} maxNum={10} />
    </div>
  );
}
