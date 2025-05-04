import { useDbObjectStore } from "../utils/zustandStore/dbObjectStore";
import SelectAttribute from "./SubComponents/SelectAttribute";

const Description = () => {
  const DbObject = useDbObjectStore((state) => state.dbObject);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <SelectAttribute array={DbObject?.descriptions} />
        {/* <h1>This is a Attribute component</h1>
        <label className="floating-label">
          <input
            type="text"
            value={Attribute.name}
            placeholder={"Attribute name"}
            className="input input-md"
            onChange={(e) => changeName(e.target.value)}
          />
          <span>"Attribute name"</span>
        </label>
        <label className="floating-label">
          <input
            type="text"
            value={Attribute.value}
            placeholder={"Attribute value"}
            className="input"
            onChange={(e) => changeValue(e.target.value)}
          />
          <span>{"Attribute value"}</span>
        </label> */}
      </div>
      {/* <button onClick={() => handleChange()} className="btn btn-success mt-2">
        Save
      </button> */}
    </div>
  );
};

export default Description;
