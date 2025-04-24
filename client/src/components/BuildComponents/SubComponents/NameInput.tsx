import { useEffect, useRef } from "react";
type PropType = {
  props: string | null;
};

const NameInput = ({ props }: PropType) => {
  useEffect(() => {}, [props]);

  const inputName = useRef<HTMLInputElement | null>(null);

  const handleNameInputValue = () => {
    if (inputName.current) {
      console.log("inputName.current");
    }
  };

  return (
    <div>
      <input
        value={props}
        ref={inputName}
        type="text"
        placeholder="Type here"
        className="input"
        onChange={(e) => {
          console.log(e);
        }}
      />
      <button
        className="btn btn-accent mx-2 min-w-20"
        onClick={() => handleNameInputValue()}
      >
        Save
      </button>
    </div>
  );
};

export default NameInput;
