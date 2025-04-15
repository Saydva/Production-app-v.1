import { ReactElement, ReactNode } from "react";
import { piece } from "../../utils/Context";

type propsArrayType = {
  props: piece[] | undefined;
};

const SelectComponent = ({ props }: propsArrayType) => {
  const listOfPropsArray: any = props?.map((item) => {
    <li>{JSON.stringify(item)}</li>;
  });

  return (
    <div>
      <select defaultValue="Pick a color" className="select">
        <option disabled={true}>Pick a color</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
    </div>
  );
};

export default SelectComponent;
