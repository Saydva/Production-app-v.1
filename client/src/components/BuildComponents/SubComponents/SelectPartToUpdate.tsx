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
        <option value={defaultValueOption.partName}>Pick Part tu udate</option>
        {ListOptions}
      </select>
    </div>
  );
};

export default SelectPartToUpdate;
