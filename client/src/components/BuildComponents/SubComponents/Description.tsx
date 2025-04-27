import { description } from "../../utils/myTypes";
import { useModelStore } from "../../utils/zustandStore/modelStore";

type PropsType = {
  props: description;
};

type NameType = {
  name: string[];
};

const Description = ({ props, name }: PropsType & NameType) => {
  const ChangeDescriptionName = useModelStore(
    (state) => state.changeDescriptionName
  );
  const ChangeDescriptionValue = useModelStore(
    (state) => state.changeDescriptionValue
  );
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="floating-label">
          <input
            type="text"
            value={props?.name}
            placeholder={`${name[0]}`}
            className="input input-md"
            onChange={(e) => ChangeDescriptionName(e.target.value)}
          />
          <span>{`${name[0]}`}</span>
        </label>
        <label className="floating-label">
          <input
            type="text"
            value={props?.value}
            placeholder={`${name[1]}`}
            className="input"
            onChange={(e) => ChangeDescriptionValue(e.target.value)}
          />
          <span>{`${name[1]}`}</span>
        </label>
      </div>
    </div>
  );
};

export default Description;
