import { useEffect, useRef, useState } from "react";

type PropType = {
  props: number | undefined;
};

const StandartTimeInput = ({ props }: PropType) => {
  const [partStTime, setPartStTime] = useState<number>(0);

  const inputPartStTime = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    props ? setPartStTime(props) : setPartStTime(0);
  }, [props]);

  return (
    <div>
      <input
        readOnly
        ref={inputPartStTime}
        value={partStTime}
        type="text"
        placeholder="Type here"
        className="input"
        onChange={(e) => setPartStTime(Number(e.target.value))}
      />
    </div>
  );
};

export default StandartTimeInput;
