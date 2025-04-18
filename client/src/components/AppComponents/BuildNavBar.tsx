import { useState, JSX, ReactNode } from "react";
import Model from "../BuildComponents/Model";
import Piece from "../BuildComponents/Piece";
import SubPiece from "../BuildComponents/SubPiece";
import Attribute from "../BuildComponents/Attribute";
import Description from "../BuildComponents/Description";

const BuildNavBar = () => {
  const piece = <Piece />;
  const subPiece = <SubPiece />;
  const model = <Model />;
  const attribute = <Attribute />;
  const description = <Description />;
  const [render, setRender] = useState<JSX.Element | null>(null);

  const renderedComponent = (component: ReactNode) => {
    return component;
  };

  console.log(render);

  return (
    <>
      <div>
        <h3 className="bg-info p-2 my-2 rounded-sm">
          Pick a part to Update Create or Change
        </h3>
        <div className="flex gap-1">
          <button onClick={() => setRender(piece)} className="btn btn-success">
            Piece
          </button>
          <button
            onClick={() => setRender(subPiece)}
            className="btn btn-success"
          >
            SubPiece
          </button>
          <button onClick={() => setRender(model)} className="btn btn-success">
            Model
          </button>
          <button
            onClick={() => setRender(attribute)}
            className="btn btn-success"
          >
            Attribute
          </button>
          <button
            onClick={() => setRender(description)}
            className="btn btn-success"
          >
            Description
          </button>
        </div>
        {renderedComponent(render)}
      </div>
    </>
  );
};

export default BuildNavBar;
