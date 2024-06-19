import React from "react";
import User from "./User.js";
// export const About = () => {
//   return (
//     <div className="about">
//       <UserClass name={"Jitender Classs"} location={"Delhi Class"} />
//     </div>
//   );
// };

/**
 * Parent Constructor for
 * Parent Render
 *    First Child constructor
 *      First child render
 *     Second Child constructor
 *    Second child render
 * 
 * After this the DOM manipulation started and diff is batched and updated
 * First and SEcond child component did mount in batches
 * 
 * parent component did mout
 * 



 */
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log("Parent constructor: About");
  }
  async componentDidMount() {
    //Why is this required? Because the component is
    //already mounted and data can be fetched now for rerender
    //console.log("Parent componentDidMount: About");
  }
  render() {
    //console.log("Parent Render: About");
    return (
      <div className="about">
        <User name={"First Child"} location={"Delhi Class"} />
      </div>
    );
  }
  /**
   * Due to React Optimization of render phase
   * the above two child are first rendered according to the lifecycle methods and then
   * togehter at the end the render the commiut phase componentsDiDMount is called in batch for both
   */
}

export default About;
