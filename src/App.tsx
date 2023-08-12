import "./App.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import LightAndDarkModeButton from "./components/LightDarkButtons";

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

  const links2: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[] = [
    {
      link: "www.ww.ww",
      label: "Productos",
      links: [
        { link: "", label: "Producto 1" },
        { link: "", label: "Producto 2" },
        { link: "", label: "Producto 3" },
      ],
    },
    { link: "www.ww.ww", label: "Info", links: [] },
    { link: "www.ww.ww", label: "Contacto", links: [] },
  ];

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          
        {/* <LightAndDarkModeButton></LightAndDarkModeButton> */}
          <BrowserRouter>
            <Routes>
              <Route path="/my-mantine-app" element={<Home></Home>}></Route>
              <Route path="/detail" element={<Detail></Detail>}></Route>
            </Routes>
          </BrowserRouter>
          
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
