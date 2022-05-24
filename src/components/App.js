import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  console.log(user.links)
  return (
    <div>
      <NavBar />
      <Home firebrick={user.color}
        user={user}
        name={user.name}
        city={user.city} />
      <About bio={user.bio}

      />
    </div>
  );
}

export default App;
