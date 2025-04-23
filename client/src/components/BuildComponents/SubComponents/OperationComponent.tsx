type PropsType = {
  props: { name: string; stTime: number };
};

const OperationComponent = ({ props }: PropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={props?.name}
        placeholder="Type here"
        className="input"
      />

      <input
        type="text"
        value={props?.stTime}
        placeholder="Type here"
        className="input"
      />
    </div>
  );
};

export default OperationComponent;
