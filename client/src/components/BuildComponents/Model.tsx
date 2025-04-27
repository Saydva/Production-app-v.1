import NameInput from "./SubComponents/NameInput";
import StandartTimeInput from "./SubComponents/StandartTimeInput";
import SelectModel from "./SubComponents/SelectModel";
import SelectComponentFromArray from "./SubComponents/SelectComponentFromArray";
import OperationComponent from "./SubComponents/OperationComponent";
import { useModelStore } from "../utils/zustandStore/modelStore";
import { MongoDbData } from "../utils/MongoDbClone";
import AttDescription from "./SubComponents/AttDescription";

const Model = () => {
  const Model = useModelStore((state) => state.Model);
  console.log(
    "subPieces :" + Model.subPieces.length,
    "pieces : " + Model.pieces.length,
    "name :" + Model.partName
  );
  return (
    <div className="flex flex-col gap-2">
      <SelectModel array={MongoDbData.models} />
      <h1>This is a model component</h1>
      <NameInput props={Model.partName} />
      <StandartTimeInput props={Model.partStTime} />
      <SelectComponentFromArray props={Model.pieces} />
      <SelectComponentFromArray props={Model.subPieces} />
      <AttDescription props={Model.attribute} />
      <AttDescription props={Model.description} />
      <OperationComponent props={Model.operation} />
    </div>
  );
};

export default Model;
