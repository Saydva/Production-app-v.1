import { JSX } from "react";
import { piece } from "../../utils/myTypes";
import { subPiece } from "../../utils/myTypes";

type propsType = {
  props: piece[] | subPiece[] | undefined;
};

const SelectComponentFromArray = ({ props }: propsType) => {
  const listOfPropsArray: JSX.Element[] = props?.map(
    (item: piece, index: number) => (
      <li key={index} className="alert alert-info max-w-80 my-2">
        {JSON.stringify(item.partName)}
      </li>
    )
  );
  return (
    <div>
      <select defaultValue="Pick a color" className="select">
        <option disabled={true}>Pick a color</option>
        <option>Fetch Data</option>
      </select>
      <ul>{listOfPropsArray}</ul>
    </div>
  );
};

export default SelectComponentFromArray;
