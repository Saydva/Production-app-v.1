import { useContext } from "react";
import { MyContext } from "../../utils/Context";

type NameStTime = {
  partName: string;
  partStTime: number;
};

type SelectPartToUpdate = {
  array: NameStTime[];
};

const SelectPartToUpdate = ({ array }: SelectPartToUpdate) => {
  const { dbObject, setDbObject }: any = useContext(MyContext);
  console.log(dbObject);

  const ListOptions = array.map((e: NameStTime, index: number) => {
    return (
      <option key={index} value={JSON.stringify(e)}>
        {e.partName}
      </option>
    );
  });

  const nothing = {
    name: null,
  };

  return (
    <div>
      <select
        defaultValue="Pick a color"
        className="select"
        onChange={(e) => setDbObject(JSON.parse(e.target.value))}
      >
        <option value={JSON.stringify(nothing.name)}>Pick Part tu udate</option>
        {ListOptions}
      </select>
    </div>
  );
};

export default SelectPartToUpdate;
