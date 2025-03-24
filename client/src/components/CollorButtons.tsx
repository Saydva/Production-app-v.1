const CollorButtons = () => {
  return (
    <div className="flex flex-col m-4">
      <h3>Colors</h3>
      <div className="w-32 ">
        <button className="btn w-24 btn-outline m-1">Default</button>
        <button className="btn w-24 btn-outline m-1 btn-primary">
          Primary
        </button>
        <button className="btn w-24 btn-outline m-1 btn-secondary">
          Secondary
        </button>
        <button className="btn w-24 btn-outline m-1 btn-accent">Accent</button>
        <button className="btn w-24 btn-outline m-1 btn-info">Info</button>
        <button className="btn w-24 btn-outline m-1 btn-success">
          Success
        </button>
        <button className="btn w-24 btn-outline m-1 btn-warning">
          Warning
        </button>
        <button className="btn w-24 btn-outline m-1 btn-error">Error</button>
      </div>
    </div>
  );
};

export default CollorButtons;
