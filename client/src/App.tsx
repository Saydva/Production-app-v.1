import { useState, ReactElement } from "react";
import CollorButtons from "./components/CollorButtons";
import MainNavbar from "./components/MainNavbar";
import ThemeButton from "./components/ThemeButton";

export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

function App(): ReactElement {
  const themes: Themes[] = [Themes.LIGHT, Themes.DARK];
  const [index, setIndex] = useState<number>(0);

  return (
    <div
      data-theme={themes[index]}
      className=" h-screen transition-colors duration-500"
    >
      <div id="my-app-container">
        <MainNavbar>
          <ThemeButton index={index} setIndex={setIndex} themes={themes} />
        </MainNavbar>

        <CollorButtons />
      </div>
    </div>
  );
}

export default App;
