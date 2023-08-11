import "./App.css";
import {
  Paper,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import Cards from "./Components/Cards";
import LightAndDarkModeButton from "./Components/LightDarkButtons";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { HeaderSimple } from "./Components/HeaderSimple";
import { HeaderMenu } from "./Components/HeaderMenu";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  
  // const links : { link: string; label: string }[]                                           = [{link:'www.ww.ww',label:'Información'},{link:'www.ww.ww',label:'Productos'},{link:'www.ww.ww',label:'Contactos'}];

  const links2: 
  { link: string; label: string; links: { link: string; label: string }[] }[] = 
    [
      {link:'www.ww.ww',label:'Productos', links:[{link:"",label:"Producto 1"},{link:"",label:"Producto 2"},{link:"",label:"Producto 3"}]},
      {link:'www.ww.ww',label:'Info', links:[]},
      {link:'www.ww.ww',label:'Contacto', links:[]}
    ];

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <Paper style={{ minHeight: "100vh" }}>
            <HeaderMenu links={links2}></HeaderMenu>
            {/* <HeaderSimple links={links}></HeaderSimple> */}
            <Cards></Cards>
            <LightAndDarkModeButton></LightAndDarkModeButton>
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
