import axios from "axios";
import { attribute } from "../utils/myTypes";
import { useAttributeStore } from "../utils/zustandStore/attributeStore";
import { useDbObjectStore } from "../utils/zustandStore/dbObjectStore";
import SelectAttribute from "./SubComponents/SelectAttribute";
import { useMessageStore } from "../utils/zustandStore/messageStore";

const Attribute = () => {
  const DbObject = useDbObjectStore((state) => state.dbObject);
  const Attribute = useAttributeStore((state) => state);
  const message = useMessageStore((state) => state.message);
  const createAttribute = (object: attribute) => {
    axios
      .post("http://localhost:5000/attributes", object)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("Error creating attribute:", err);
      });
    // useDbObjectStore.getState().addAttribute(res.data); // Update the store with the fetched data
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <SelectAttribute array={DbObject?.attributes} />
        <h1>This is a Attribute component</h1>
        <label className="floating-label">
          <input
            type="text"
            value={Attribute.Attribute.name}
            placeholder={"Attribute name"}
            className="input input-md"
            onChange={(e) => Attribute.changeName(e.target.value)}
          />
          <span>"Attribute name"</span>
        </label>
        <label className="floating-label">
          <input
            type="text"
            value={Attribute.Attribute.value}
            placeholder={"Attribute value"}
            className="input"
            onChange={(e) => Attribute.changeValue(e.target.value)}
          />
          <span>{"Attribute value"}</span>
        </label>
      </div>
      <button
        onClick={() => createAttribute(Attribute.Attribute)}
        className="btn btn-success mt-2"
      >
        Save
      </button>
      <p>{message.message}</p>
    </div>
  );
};

export default Attribute;
