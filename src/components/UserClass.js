import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name + "Child constructor: UserClass");
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("InervalCalled");
    }, 1000);
  }

  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timer);
    //to clear some clearing like the interval or somethig like that
  } //
  render() {
    //console.log(this.props.name + "Child render: UserClass");
    const { name, location } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE THE STATE VARIABLE DIRECTLY
            this.setState({
              count: count + 1,
            });
          }}
        >
          Update Count
        </button>
        <h2>Name : {name}</h2>
        <h3>Email : jitenderpalsra@gmail.com</h3>
        <h3>Location : {location}</h3>
        <h4>Contatc : 896867428345 </h4>
      </div>
    );
  }
}

/***
 * Constructor Called
 * Render called - with dummy dat
 * componentDidMount is called -> API is called
 * this.setStateIsCalled - > API is called -> Update Cycled icalled and diff is called
 * this.render() is called with the updated state data
 * Now the DOM is updates and after the DOM updates done
 * componentDidUpdate() is called
 *
 *
 *
 *
 *
 */

export default UserClass;
