import { operation } from "../../utils/myTypes";

interface PropType {
  props: operation;
}

const OperationComponent = ({ props }: PropType) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={props?.name}
        placeholder="Type here"
        className="input"
      />

      <input
        type="text"
        value={props?.stTime}
        placeholder="Type here"
        className="input"
      />
    </div>
  );
};

export default OperationComponent;
