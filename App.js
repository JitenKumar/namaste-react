import React from "react";
import ReactDOM from "react-dom/client";
// Using JSX for write the code to make life easier
//JSX is not like HTML, but it is HTML like syntax
// it is more of like XML syntax
//JSX is just syntax
/* JSX is not understood by the JSEngine, it is //
    transpiled by Parcel first using the Babel and then convert the code to one understood by JSEngine
*/
/**
 * JSX  => BABEL => React.createElement => Now React Understand it and then conver to => HTML Element => JSEgine
 */
/**
 * React Element
 */
const jsxHeading = <h1 className="head">This is JSX Title Heading</h1>;

/**
 * React Component
 * 1. Class Based Component -> Old React Component
 * 2. Function Based Component -> New React Component
 */
const title = <h1 className="title">This is React Element</h1>;
const Title = () => {
  {
    title;
  }
  return <h1 className="head">This is JSX function Title</h1>;
};
// Component Compositions -> composing two component
const Heading = () => {
  return (
    <div id="container">
        {Title()}
        <Title></Title>
      <Title />
      <h1 className="head">This is JSX function heading componet</h1>;
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
