import Attribute from "../BuildComponents/Attribute";
import Description from "../BuildComponents/Description";
import Model from "../BuildComponents/Model";
import Piece from "../BuildComponents/Piece";
import SubPiece from "../BuildComponents/SubPiece";
import { useRender } from "../utils/zustandStore/renderStore";

const BuildNavBar = () => {
  const Render = useRender((state) => state.element);
  const SetRender = useRender((state) => state.setElement);
  return (
    <>
      <div>
        <h3 className="bg-info p-2 my-2 rounded-sm">
          Pick a part to Update, Create or Change
        </h3>
        {/* <div className="flex gap-1">
          <button
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
        {/* <button
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
          </button> */}
        {/* </div> */}
        {Render}
      </div>
    </>
  );
};

export default BuildNavBar;
