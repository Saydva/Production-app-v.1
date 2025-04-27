import NameInput from "./SubComponents/NameInput";
import StandartTimeInput from "./SubComponents/StandartTimeInput";
import SelectModel from "./SubComponents/SelectModel";
import SelectComponentFromArray from "./SubComponents/SelectComponentFromArray";
import Attribute from "./SubComponents/Attibute";
import Description from "./SubComponents/Description";
import OperationComponent from "./SubComponents/OperationComponent";
import { useModelStore } from "../utils/zustandStore/modelStore";
import { MongoDbData } from "../utils/MongoDbClone";

const Model = () => {
  const Model = useModelStore((state) => state.Model);

  return (
    <div className="flex flex-col gap-2">
      <SelectModel array={MongoDbData.models} />
      <h1>This is a model component</h1>
      <NameInput props={Model.partName} />
      <StandartTimeInput props={Model.partStTime} />
      <SelectComponentFromArray props={Model.pieces} name={"Piecec"} />
      <SelectComponentFromArray props={Model.subPieces} name={"SubPiecec"} />
      <Attribute
        props={Model.attribute}
        name={["Attribute name", "attribute value"]}
      />
      <Description
        props={Model.description}
        name={["Description name", "description value"]}
      />
      <OperationComponent
        props={Model.operation}
        name={["Operation name", "operation value"]}
      />
    </div>
  );
};

export default Model;
