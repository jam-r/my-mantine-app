import "./App.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
  Paper,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
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
      links: [],
    },
    { link: "/my-mantine-app/datos", label: "Datos de contacto", links: [] },
  ];

  return (
    <div className="App">
      {/* <LightAndDarkModeButton></LightAndDarkModeButton> */}
      <MantineProvider withCSSVariables  theme={{
        colors: {
          'linen': ['#FBF4EC', '#F0E9E2', '#E5DFD8', '#D9D4CF', '#CECAC5', '#C3BFBB', '#B8B5B1', '#ADAAA7', '#A2A09D', '#969594'],//1
          'seagull': ['#7CC5CA', '#68BBC1', '#53B2B9', '#45A2A9', '#3C8E93', '#34797E', '#2B6569', '#225154', '#1A3D3F', '#11282A'], //4
          'sea-buckthorn': ['#ED9E52', '#EA8F3A', '#E8801F', '#D37216', '#B96313', '#9F5511', '#84470E', '#6A390B', '#4F2B08', '#351C06'],//4
          'jagged-ice': ['#BBDFE0', '#A3D3D5', '#89C7C9', '#6FBABD', '#56AEB1', '#47989A', '#3B7E81', '#2F6567', '#234C4D', '#183333'],//2
          'sea-pink': ['#DE868C', '#D76D74', '#D0545C', '#C93A44', '#B23139', '#992A31', '#7F2329', '#661C21', '#4C1519', '#330E10'],//4
          'buttermilk': ['#F7D7A0', '#F5C97E', '#F2BB5C', '#EFAD3A', '#EC9E17', '#CE8811', '#AC720E', '#895B0B', '#674408', '#452D06'],//3
          'oasis': ['#FBEBBE', '#F9E09B', '#F6D475', '#F4C84F', '#F1BC29', '#E3AB0F', '#BE8E0C', '#98720A', '#725507', '#4C3905'],//2
          'watusi': ['#F2BBBC', '#EC9A9B', '#E5797B', '#DF585B', '#D9383A', '#C42528', '#A41F21', '#83191B', '#621314', '#410C0D'],//2
          'cinderella': ['#FBD0CF', '#F8ABA9', '#F58583', '#F25F5C', '#EF3935', '#E81613', '#C11310', '#9A0F0D', '#740B09', '#4D0706'],//2
        },
        primaryColor:'oasis',
        primaryShade:6,
        
      }}>
        <BrowserRouter>
          <HeaderResponsive  links={links2}></HeaderResponsive>
          <Paper style={{ minHeight: "100vh" }} className="main-background" >
            <Routes>
              <Route path="/my-mantine-app" element={<Home></Home>}></Route>
              <Route
                path="/my-mantine-app/detail"
                element={<Detail></Detail>}
              ></Route>
            </Routes>
          </Paper>
          <FooterSocial></FooterSocial>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
