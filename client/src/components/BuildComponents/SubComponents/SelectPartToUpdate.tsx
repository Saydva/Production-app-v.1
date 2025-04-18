import { useContext } from "react";
import { ProductionContext } from "../../utils/Context";

type NameStTime = {
  partName: string;
  partStTime: number;
};

type SelectPartToUpdate = {
  array: NameStTime[];
};

const defaultValueOption = {
  partName: "[]",
};

const SelectPartToUpdate = ({ array }: SelectPartToUpdate) => {
  const { setDbObject } = useContext(ProductionContext);

  const ListOptions = array.map((e: NameStTime, index: number) => {
    return (
      <option key={index} value={JSON.stringify(e)}>
        {e?.partName}
      </option>
    );
  });

  return (
    <div>
      <select
        defaultValue="Pick a color"
        className="select"
        onChange={(e) =>
          setDbObject(e.target.value ? JSON.parse(e.target.value) : "")
        }
      >
        <option value={defaultValueOption.partName}>
          Create Model or pick one to change
        </option>
        {ListOptions}
      </select>
      <button className="btn btn-secondary mx-2 min-w-20">Create</button>
    </div>
  );
};

export default SelectPartToUpdate;
