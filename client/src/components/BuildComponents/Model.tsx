import NameInput from "./SubComponents/NameInput";
// import OperationComponent from "./SubComponents/OperationComponent";
import SelectComponent from "./SubComponents/SelectComponent";
import StandartTimeInput from "./SubComponents/StandartTimeInput";
import { useContext } from "react";
import { ProductionContext } from "../utils/Context";
import SelectPartToUpdate from "./SubComponents/SelectPartToUpdate";

const Model = () => {
  const { dbObject, MongoDbData } = useContext(ProductionContext);

  return (
    <div className="flex flex-col gap-2">
      <SelectPartToUpdate array={MongoDbData.models} />
      <h1>This is a model component</h1>
      <NameInput props={dbObject?.partName} />
      <StandartTimeInput props={dbObject?.partStTime} />
      <SelectComponent props={dbObject?.pieces} />
      <SelectComponent props={dbObject?.subPieces} />
      {/* <OperationComponent props={dbObject?.operation} /> */}
    </div>
  );
};

export default Model;
