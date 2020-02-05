import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offerCount} = props;

  return (
    <Main offerCount={offerCount}/>
  );
};

export default App;
