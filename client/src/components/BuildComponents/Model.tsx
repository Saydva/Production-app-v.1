import NameInput from "./SubComponents/NameInput";
import OperationComponent from "./SubComponents/OperationComponent";
import SelectComponent from "./SubComponents/SelectComponent";
import StandartTimeInput from "./SubComponents/StandartTimeInput";
import { useContext } from "react";
import { ProductionContext } from "../utils/Context";

const Model = () => {
  const { dbObject } = useContext(ProductionContext);

  return (
    <div className="flex flex-col gap-2">
      <h1>This is a model component</h1>
      <NameInput props={dbObject?.partName} />
      <StandartTimeInput props={dbObject?.partStTime} />
      <SelectComponent props={dbObject?.pieces} />
      <SelectComponent props={dbObject?.subPieces} />
      {/* <SelectComponent />
      <SelectComponent />
      <OperationComponent /> */}
    </div>
  );
};

export default Model;
