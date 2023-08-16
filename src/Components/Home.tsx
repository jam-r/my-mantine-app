import {
  Paper,
} from "@mantine/core";

import Cards from "./Cards";
import LightAndDarkModeButton from "./LightDarkButtons";

function Home() {
  return (
    <div className="App" >
     
        {/* <HeaderSimple links={links}></HeaderSimple> */}
        
        <Cards></Cards>
    </div>
  );
}

export default Home;
