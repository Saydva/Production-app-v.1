import BuildNavBar from "../AppComponents/BuildNavBar";
import { ProductionProvider } from "../utils/Context";

const BuildDataPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 mx-2">
        <ProductionProvider>
          <BuildNavBar />
        </ProductionProvider>
      </div>
    </div>
  );
};

export default BuildDataPage;
