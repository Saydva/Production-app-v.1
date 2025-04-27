import { description } from "../../utils/myTypes";
import { useModelStore } from "../../utils/zustandStore/modelStore";

type PropsType = {
  props: description;
};

type NameType = {
  name: string[];
};

const Attribute = ({ props, name }: PropsType & NameType) => {
  const ChangeAttName = useModelStore((state) => state.changeAttributeName);
  const ChangeAttValue = useModelStore((state) => state.changeAttributeValue);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="floating-label">
          <input
            type="text"
            value={props?.name}
            placeholder={`${name[0]}`}
            className="input input-md"
            onChange={(e) => ChangeAttName(e.target.value)}
          />
          <span>{`${name[0]}`}</span>
        </label>
        <label className="floating-label">
          <input
            type="text"
            value={props?.value}
            placeholder={`${name[1]}`}
            className="input"
            onChange={(e) => ChangeAttValue(e.target.value)}
          />
          <span>{`${name[1]}`}</span>
        </label>
      </div>
    </div>
  );
};

export default Attribute;
