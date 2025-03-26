import NameInput from "./SubComponents/NameInput";
import OperationComponent from "./SubComponents/OperationComponent";
import SelectComponent from "./SubComponents/SelectComponent";
import StandartTimeInput from "./SubComponents/StandartTimeInput";

const Model = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1>This is a model component</h1>
      <NameInput />
      <StandartTimeInput />
      <SelectComponent />
      <SelectComponent />
      <SelectComponent />
      <SelectComponent />
      <OperationComponent />
    </div>
  );
};

export default Model;
