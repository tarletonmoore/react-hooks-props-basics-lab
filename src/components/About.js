import React from "react";
import user from "../data/user";
import Links from "./Links"

function About({ bio }) {
  console.log(user.links)
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* {bio ? <p>{bio} </p> : null} */}
      {bio && bio.length > 1 ? <p>{bio}</p> : null}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github}
        linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;
