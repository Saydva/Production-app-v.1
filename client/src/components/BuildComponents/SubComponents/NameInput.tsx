import { useRef } from "react";
import { useModelStore } from "../../utils/zustandStore/modelStore";
type PropType = {
  props: string | null;
};

const NameInput = ({ props }: PropType) => {
  const inputName = useRef<HTMLInputElement | null>(null);
  const changeName = useModelStore((state) => state.changeName);

  // const handleNameInputValue = () => {
  //   if (inputName.current) {
  //     console.log("inputName.current");
  //   }
  // };

  return (
    <div>
      <input
        value={props}
        ref={inputName}
        type="text"
        placeholder="Type here"
        className="input"
        onChange={(e) => changeName(e.target.value)}
      />
      <button className="btn btn-accent mx-2 min-w-20">Save</button>
    </div>
  );
};

export default NameInput;
