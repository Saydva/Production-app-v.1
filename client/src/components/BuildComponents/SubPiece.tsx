import { useContext } from "react";
import { ProductionContext } from "../utils/Context";
import SelectPartToUpdate from "./SubComponents/SelectPartToUpdate";
import { MongoDbData } from "../utils/MongoDbClone";
import NameInput from "./SubComponents/NameInput";

const SubPiece = () => {
  const { dbObject } = useContext(ProductionContext);

  return (
    <div className="flex flex-col gap-2">
      <SelectPartToUpdate array={MongoDbData.subPieces} />
      <h1>This is a Subpiece component</h1>
      <NameInput props={dbObject?.partName} />
    </div>
  );
};

export default SubPiece;
