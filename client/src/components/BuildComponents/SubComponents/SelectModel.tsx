import { initModel, useModelStore } from "../../utils/zustandStore/modelStore";

type NameStTime = {
  partName: string;
  partStTime: number;
};

type SelectPartToUpdate = {
  array: NameStTime[];
};

const SelectPartToUpdate = ({ array }: SelectPartToUpdate) => {
  const SelectModel = useModelStore((state) => state.updateModel);

  const ListOptions = array.map((e: NameStTime, index: number) => {
    return (
      <option key={index} value={JSON.stringify(e)}>
        {e?.partName}
      </option>
    );
  });

  return (
    <div className="mt-3">
      <select
        defaultValue="Pick a color"
        className="select"
        onChange={(e) =>
          SelectModel(e.target.value ? JSON.parse(e.target.value) : "")
        }
      >
        <option value={JSON.stringify(initModel)}>
          Create Model or pick one to change
        </option>
        {ListOptions}
      </select>
      <button className="btn btn-secondary mx-2 min-w-20">Create</button>
    </div>
  );
};

export default SelectPartToUpdate;
