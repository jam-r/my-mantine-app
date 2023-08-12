import {
  Paper,
} from "@mantine/core";

import Cards from "./Cards";
import LightAndDarkModeButton from "./LightDarkButtons";

function Home() {
  return (
    <div className="App">
      <Paper style={{ minHeight: "100vh" }}>
        {/* <HeaderSimple links={links}></HeaderSimple> */}
        
        <Cards></Cards>
      </Paper>
    </div>
  );
}

export default Home;
