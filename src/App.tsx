import "./App.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
  Paper,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { HeaderResponsive } from "./components/HeaderResponsive";
import { FooterSocial } from "./components/FooterSocial";

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
      link: "/my-mantine-app",
      label: "Tortas",
      links: [
      ],
    },
    { link: "/my-mantine-app/datos", label: "Datos de contacto", links: [] },
  ];

  return (
    <div className="App">
        {/* <LightAndDarkModeButton></LightAndDarkModeButton> */}
          <BrowserRouter>
            <HeaderResponsive links={links2}></HeaderResponsive>
            <Paper style={{ minHeight: "100vh" }} mt="md">
            <Routes>
              <Route path="/my-mantine-app" element={<Home></Home>}></Route>
              <Route path="/my-mantine-app/detail" element={<Detail></Detail>}></Route>
            </Routes>
            <FooterSocial></FooterSocial>
            </Paper>
          </BrowserRouter>
          
    </div>
  );
}

export default App;
