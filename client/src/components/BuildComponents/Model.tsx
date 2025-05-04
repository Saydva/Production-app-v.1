import NameInput from "./SubComponents/NameInput";
import StandartTimeInput from "./SubComponents/StandartTimeInput";
import SelectModel from "./SubComponents/SelectModel";
import SelectComponentFromArray from "./SubComponents/SelectComponentFromArray";
import DescriptionComponent from "./SubComponents/DescriptionComponent";
import OperationComponent from "./SubComponents/OperationComponent";
import { useModelStore } from "../utils/zustandStore/modelStore";
import { MongoDbData } from "../utils/MongoDbClone";
import AttributeComponent from "./SubComponents/AttributeComponent";

const Model = () => {
  const Model = useModelStore((state) => state.Model);

  return (
    <div className="flex flex-col gap-2">
      <SelectModel array={MongoDbData.models} nameOf={"model"} />
      <h1>This is a model component</h1>
      <NameInput props={Model.partName} />
      <StandartTimeInput props={Model.partStTime} />
      <SelectComponentFromArray props={Model.pieces} name={"Piecec"} />
      <SelectComponentFromArray props={Model.subPieces} name={"SubPiecec"} />
      <AttributeComponent
        props={Model.attribute}
        name={["Attribute name", "attribute value"]}
      />
      <DescriptionComponent
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
