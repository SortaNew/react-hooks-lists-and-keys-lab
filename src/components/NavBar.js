import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const all = links.map((element) => {
    return <a href={`#${element}`} key={element}>{element}</a>
  })
  return <nav>{
    all    
  }</nav>;
}

export default NavBar;
