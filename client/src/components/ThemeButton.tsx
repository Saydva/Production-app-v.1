import { FC, useState } from "react";
import { Themes } from "../App";

type ThemeButtonProps = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  themes: Themes[];
};

const ThemeButton: FC<ThemeButtonProps> = ({ setIndex, themes, index }) => {
  //const anime is boolean and trought expresion in className set animation css to element
  const [animate, setAnimate] = useState<boolean>(false);

  //function that increment index number until themes array length
  const changeTheme = (num: number): void => {
    if (num == themes.length - 1 || num > themes.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  //function that after click updates anime-boolean to true, upate index and then set anime-boolean to false
  const animeItem = (): void => {
    setAnimate(true);
    changeTheme(index);
    //setAnime boolean to false and remove motion classes from element -- button
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  //ui for theme button
  return (
    <button
      onClick={animeItem}
      className={`bg-info cursor-pointer rounded-lg p-2 m-2 ${
        animate ? " motion-preset-focus " : " "
      } `}
    >
      Theme
    </button>
  );
};

export default ThemeButton;
