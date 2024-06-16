import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2>Name : {name}</h2>
      <h3>Email : jitenderpalsra@gmail.com</h3>
      <h3>Location : {location}</h3>
      <h4>Contatc : 896867428345 </h4>
    </div>
  );
};
export default User;
