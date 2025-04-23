import { useEffect, useRef, useState } from "react";
type PropType = {
  props: string | null;
};

const NameInput = ({ props }: PropType) => {
  const [name, setName] = useState<string | null>("");

  useEffect(() => {
    props ? setName(props) : setName("");
  }, [props]);

  const inputName = useRef<HTMLInputElement | null>(null);

  const handleNameInputValue = () => {
    if (inputName.current) {
      setName(inputName.current.value);
    }
  };

  return (
    <div>
      <input
        value={name}
        ref={inputName}
        type="text"
        placeholder="Type here"
        className="input"
        onChange={(e) => {
          setName(e.target.value);
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
