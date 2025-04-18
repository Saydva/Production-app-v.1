import { ReactElement, ReactNode } from "react";
import { piece } from "../../utils/Context";
import { subPiece } from "../../utils/Context";

type propsPieceType = {
  props: piece[] | undefined;
};

type propsSubpieceType = {
  props: subPiece[] | undefined;
};

const SelectComponent = ({ props }: propsPieceType | propsSubpieceType) => {
  const listOfPropsArray: any = props?.map((item, index) => (
    <li key={index} className="alert alert-info max-w-80 my-2">
      {JSON.stringify(item.partName)}
    </li>
  ));

  return (
    <div>
      <select defaultValue="Pick a color" className="select">
        <option disabled={true}>Pick a color</option>
        <option>Crimson</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
      <ul>{listOfPropsArray}</ul>
    </div>
  );
};

export default SelectComponent;
