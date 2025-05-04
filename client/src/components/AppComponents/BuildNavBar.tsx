import Model from "../BuildComponents/Model";
// import Piece from "../BuildComponents/Piece";
// import SubPiece from "../BuildComponents/SubPiece";
import Attribute from "../BuildComponents/Attribute";
import Description from "../BuildComponents/Description";
import { useRender } from "../utils/zustandStore/renderStore";
import { useEffect } from "react";
import { getAllDbData } from "../utils/zustandStore/getFunctionsDb";

const BuildNavBar = () => {
  const Render = useRender((state) => state.element);
  const SetRender = useRender((state) => state.setElement);

  useEffect(() => {
    getAllDbData.getAttributes();
    getAllDbData.getDescriptions();
  });

  return (
    <>
      <div>
        <h3 className="bg-info p-2 my-2 rounded-sm">
          Pick a part to Update, Create or Change
        </h3>
        <div className="flex gap-1">
          {/* <button
            onClick={() => SetRender(<Piece />)}
            className="btn btn-success"
          >
            Piece
          </button>
          <button
            onClick={() => SetRender(<SubPiece />)}
            className="btn btn-success"
          >
            SubPiece
          </button> */}
          <button
            onClick={() => SetRender(<Model />)}
            className="btn btn-success"
          >
            Model
          </button>
          <button
            onClick={() => SetRender(<Attribute />)}
            className="btn btn-success"
          >
            Attribute
          </button>
          <button
            onClick={() => SetRender(<Description />)}
            className="btn btn-success"
          >
            Description
          </button>
        </div>
        {Render}
      </div>
    </>
  );
};

export default BuildNavBar;
