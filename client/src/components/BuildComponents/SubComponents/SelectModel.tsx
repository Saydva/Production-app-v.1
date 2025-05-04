import { useRef } from "react";
import { initModel, useModelStore } from "../../utils/zustandStore/modelStore";

type NameStTime = {
  partName: string;
  partStTime: number;
};

type SelectPartToUpdate = {
  array: NameStTime[];
};

type NameOf = {
  nameOf: string;
};

const SelectModel = ({ array, nameOf }: SelectPartToUpdate & NameOf) => {
  const SelectModel = useModelStore((state) => state.updateModel);
  const Input = useRef(null);

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
        ref={Input}
        className="select"
        onChange={(e) =>
          SelectModel(e.target.value ? JSON.parse(e.target.value) : "")
        }
      >
        <option value={JSON.stringify(initModel)}>
          Create {nameOf} or pick one to change
        </option>
        {ListOptions}
      </select>
    </div>
  );
};

export default SelectModel;
