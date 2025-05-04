import { useRef } from "react";
import { useAttributeStore } from "../../utils/zustandStore/attributeStore";
import { initAttribute } from "../../utils/zustandStore/attributeStore";
import { attribute } from "../../utils/myTypes";

interface SelectAttributeProps {
  array: attribute[];
}

const SelectAttribute = ({ array }: SelectAttributeProps) => {
  const UpadateAttribute = useAttributeStore((state) => state.updateAttribute);
  const Input = useRef(null);

  const ListOptions = array.map((e: attribute, index: number) => {
    return (
      <option key={index} value={JSON.stringify(e)}>
        {e?.name}
      </option>
    );
  });

  return (
    <div className="mt-3">
      <select
        ref={Input}
        className="select"
        onChange={(e) =>
          UpadateAttribute(e.target.value ? JSON.parse(e.target.value) : "")
        }
      >
        <option value={JSON.stringify(initAttribute)}>
          Create {"Attribute"} or pick one to change
        </option>
        {ListOptions}
      </select>
    </div>
  );
};

export default SelectAttribute;
