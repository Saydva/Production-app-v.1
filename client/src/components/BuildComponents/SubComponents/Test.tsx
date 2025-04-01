import { FC, ReactNode } from "react";

type MyObject = {
  partName: string;
  partStTime: number;
  subPiecec: object[];
  item: object;
};

type TestProps = {
  props: MyObject[];
};

const Test = () =>
  // { props }
  // : TestProps
  {
    return (
      <div>
        <h1>hi</h1>
        <ul></ul>
      </div>
    );
  };

export default Test;
