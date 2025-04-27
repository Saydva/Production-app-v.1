import { useState } from "react";
import { operation } from "../../utils/myTypes";
import { useModelStore } from "../../utils/zustandStore/modelStore";

type PropType = {
  props: operation;
};

type NameType = {
  name: string[];
};

const OperationComponent = ({ props, name }: PropType & NameType) => {
  const ChangeOperationName = useModelStore(
    (state) => state.changeOperationName
  );
  const ChangeOperationValue = useModelStore(
    (state) => state.changeOperationValue
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="floating-label">
        <input
          type="text"
          value={props?.name}
          placeholder={`${name[0]}`}
          className="input"
          onChange={(e) => ChangeOperationName(e.target.value)}
        />
        <span>{`${name[0]}`}</span>
      </label>
      <label className="floating-label">
        <input
          type="text"
          value={props?.stTime}
          placeholder={`${name[1]}`}
          className="input"
          onChange={(e) => ChangeOperationValue(Number(e.target.value))}
        />
        <span>{`${name[1]}`}</span>
      </label>
    </div>
  );
};

export default OperationComponent;
