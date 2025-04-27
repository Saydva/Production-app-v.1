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
      <label className="floating-label">
        <input
          readOnly
          ref={inputPartStTime}
          value={partStTime}
          type="text"
          placeholder="partStTime"
          className="input input-md"
          onChange={(e) => setPartStTime(Number(e.target.value))}
        />
        <span>partStTime</span>
      </label>
    </div>
  );
};

export default StandartTimeInput;
