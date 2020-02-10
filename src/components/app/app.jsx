import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offerCount, placeCards} = props;

  return (
    <Main offerCount={offerCount} placeCards={placeCards}/>
  );
};

export default App;
