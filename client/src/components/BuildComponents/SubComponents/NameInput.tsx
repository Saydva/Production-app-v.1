import { useRef } from "react";
import { useModelStore } from "../../utils/zustandStore/modelStore";
type PropType = {
  props: string | null;
};

const NameInput = ({ props }: PropType) => {
  const inputName = useRef<HTMLInputElement | null>(null);
  const changeName = useModelStore((state) => state.changeName);

  return (
    <div className="flex flex-row">
      <label className="floating-label ">
        <span>partName</span>
        <input
          value={props}
          ref={inputName}
          type="text"
          placeholder="partName"
          className="input input-md w-80"
          onChange={(e) => changeName(e.target.value)}
        />
      </label>
    </div>
  );
};

export default NameInput;
