import NameInput from "./SubComponents/NameInput";
import OperationComponent from "./SubComponents/OperationComponent";
import SelectComponent from "./SubComponents/SelectComponent";
import StandartTimeInput from "./SubComponents/StandartTimeInput";
import { useModelStore } from "../utils/zustandStore/modelStore";
import { MongoDbData } from "../utils/MongoDbClone";
import SelectModel from "./SubComponents/SelectModel";

const Model = () => {
  const Model = useModelStore((state) => state.initModel);
  const modelPieces = useModelStore((state) => state.initModel.pieces);
  console.log(modelPieces);

  return (
    <div className="flex flex-col gap-2">
      <SelectModel array={MongoDbData.models} />
      <h1>This is a model component</h1>
      <NameInput props={Model.partName} />
      <StandartTimeInput props={Model.partStTime} />
      <SelectComponent props={Model.pieces} />
      <SelectComponent props={Model.subPieces} />
      <OperationComponent props={Model.operation} />
    </div>
  );
};

export default Model;
