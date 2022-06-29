import React from "react";
import {Action} from "elv-components-js";

const Home = ({name, Logout}) => {
      
return (
    <>
      <div className="spacer1"/>
      <p className="hometext">Hello {name.split(" ")[0]},</p>
      <p className = "hometext">This project template uses and demonstrates the following Eluvio projects:</p>
      <a href = "https://github.com/eluv-io/elv-media-wallet" target="_blank"><p className="linktext">-elv-media-wallet</p></a>
      <a href = "https://github.com/eluv-io/elv-components-js" target="_blank"><p className="linktext" >-elv-components-js</p></a>
      <div className = "spacer1" />
      <Action label="logout"title="Logout"type="button"className="primarybtn"onClick={Logout}children={<p className="btntext">Logout</p>} />
    </>
  );
};

export default Home;
