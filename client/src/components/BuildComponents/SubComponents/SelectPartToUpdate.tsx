type NameStTime = {
  partName: string;
  partStTime: number;
};

type SelectPartToUpdate = {
  array: NameStTime[];
  setObject: (e: object) => void;
};

const SelectPartToUpdate = ({ array, setObject }: SelectPartToUpdate) => {
  const ListOptions = array.map((e: NameStTime, index: number) => {
    return (
      <option key={index} value={JSON.stringify(e)}>
        {e.partName}
      </option>
    );
  });

  const nothing = {
    name: false,
  };

  return (
    <div>
      <select
        defaultValue="Pick a color"
        className="select"
        onChange={(e) => setObject(JSON.parse(e.target.value))}
      >
        <option value={JSON.stringify(nothing.name)}>Pick Part tu udate</option>
        {ListOptions}
      </select>
    </div>
  );
};

export default SelectPartToUpdate;
