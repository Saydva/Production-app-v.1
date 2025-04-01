import { useState, ReactElement } from "react";
import { Routes, Route } from "react-router";
import MainNavbar from "./components/AppComponents/MainNavbar";
import ThemeButton from "./components/AppComponents/ThemeButton";
import HomePage from "./components/MainPages/HomePage";
import BuildDataPage from "./components/MainPages/BuildDataPage";
import BuildPlanData from "./components/MainPages/BuildPlanData";
import { Themes } from "./exports/myTypes";

function App(): ReactElement {
  const themes: Themes[] = [Themes.LIGHT, Themes.DARK];
  const [index, setIndex] = useState<number>(0);

  return (
    <div data-theme={themes[index]} className=" min-h-dvw  ">
      <div id="my-app-container">
        <MainNavbar>
          <ThemeButton index={index} setIndex={setIndex} themes={themes} />
        </MainNavbar>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="buildData" element={<BuildDataPage />} />
          <Route path="buildPlan" element={<BuildPlanData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
