import { description, attribute } from "../../utils/myTypes";

interface PropsType {
  props: attribute | description;
}

const AttDescription = ({ props }: PropsType) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={props?.name}
          placeholder="Type here"
          className="input"
        />

        <input
          type="text"
          value={props?.value}
          placeholder="Type here"
          className="input"
        />
      </div>
    </div>
  );
};

export default AttDescription;
