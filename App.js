/**
 * <div parent>
 * <div id=child1>
    * <h1 id=h1></h1>
    * <h1 id=h2></h1>
 * <div id=child2>
      * <h1 id=h1></h1>
      * <h1 id=h2></h1>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "This is heading1"),
    React.createElement("h2", { id: "heading2" }, "This is heading2"),
  ])
);

//JSX for above issues

// const h1 = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
