import {
  useState,
  ChangeEvent,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import Input from "../components/input";

interface CalculateMinimumBlankSizeProps {
  rightPD: string;
  leftPD: string;
  frameSize: string;
  frameDBL: string;
  effectiveDiameter: string;
  anyErrors: boolean[];
}

const CalculateMinimumBlankSize: FunctionComponent<
  PropsWithChildren<CalculateMinimumBlankSizeProps>
> = (props) => {
  // performing calculations to workout minimum blank size
  if (props.anyErrors.includes(true)) {
    return <></>;
  }

  const BLEED: number = 2;
  let numberRightPD: number = Number(props.rightPD);
  let numberLeftPD: number = Number(props.leftPD);
  let numberFrameSize: number = Number(props.frameSize);
  let numberFrameDBL: number = Number(props.frameDBL);
  let numberEffectiveDiameter: number = Number(props.effectiveDiameter);

  const framePD = numberFrameSize + numberFrameDBL;
  // right
  const rightDecentration = Math.abs(framePD / 2 - numberRightPD);
  const rightMinimumBlankSize = (
    rightDecentration +
    numberEffectiveDiameter +
    BLEED
  ).toFixed(1);
  // left
  const leftDecentration = Math.abs(framePD / 2 - numberLeftPD);
  const leftMinimumBlankSize = (
    leftDecentration +
    numberEffectiveDiameter +
    BLEED
  ).toFixed(1);

  return (
    <div className="cus-card">
      <div className="flex flex-row">
        <span className="text-lg">Right Minimum Blank Size:</span>
        <span className="pl-10 text-lg">{rightMinimumBlankSize}</span>
        <span className="pl-1 text-lg">mm</span>
      </div>
      <div className="flex flex-row">
        <span className="text-lg">Left Minimum Blank Size:</span>
        <span className="pl-10 text-lg">{leftMinimumBlankSize}</span>
        <span className="pl-1 text-lg">mm</span>
      </div>
    </div>
  );
};

const MinimumBlankSize: FunctionComponent = () => {
  // main component
  // return minimum blank size

  const [rightPD, setRightPD] = useState("");
  const [errorRightPD, setErrorRightPD] = useState({
    isError: false,
    errorMessage: "",
  });
  const [leftPD, setLeftPD] = useState("");
  const [errorLeftPD, setErrorLeftPD] = useState({
    isError: false,
    errorMessage: "",
  });
  const [frameSize, setFrameSize] = useState("");
  const [errorFrameSize, setErrorFrameSize] = useState({
    isError: false,
    errorMessage: "",
  });
  const [frameDBL, setFrameDBL] = useState("");
  const [errorFrameDBL, setErrorFrameDBL] = useState({
    isError: false,
    errorMessage: "",
  });
  const [effectiveDiameter, setEffectiveDiameter] = useState("");
  const [errorEffectiveDiameter, setErrorEffectiveDiameter] = useState({
    isError: false,
    errorMessage: "",
  });
  const updateRightPD = (e: ChangeEvent<HTMLInputElement>) => {
    let rightPDNumber: number = Number(e.target.value);
    setErrorRightPD({ isError: false, errorMessage: "" });
    if (!e.target.value) {
      setErrorRightPD({ isError: true, errorMessage: "Please enter right PD" });
    } // else if (rightPDNumber > 50) {
    //   let halfPD: number = rightPDNumber / 2;
    //   let halfPDString: string = String(halfPD);
    //   setRightPD(halfPDString);
    //   setLeftPD(halfPDString);
    // }
    setRightPD(e.target.value);
  };
  const updateLeftPD = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorLeftPD({ isError: false, errorMessage: "" });
    if (!e.target.value) {
      setErrorLeftPD({ isError: true, errorMessage: "Please enter left PD" });
    }
    setLeftPD(e.target.value);
  };
  const updateFrameDBL = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorFrameDBL({ isError: false, errorMessage: "" });
    if (!e.target.value) {
      setErrorFrameDBL({
        isError: true,
        errorMessage: "Please enter frame DBL",
      });
    }
    setFrameDBL(e.target.value);
  };
  const updateFrameSize = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorFrameSize({ isError: false, errorMessage: "" });
    if (!e.target.value) {
      setErrorFrameSize({
        isError: true,
        errorMessage: "Please enter frame size",
      });
    }
    setFrameSize(e.target.value);
  };
  const updateEffectiveDiameter = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorEffectiveDiameter({ isError: false, errorMessage: "" });
    if (!e.target.value) {
      setErrorEffectiveDiameter({
        isError: true,
        errorMessage: "Please enter effective diameter",
      });
    }
    setEffectiveDiameter(e.target.value);
  };

  return (
    <div className="grid grid-rows-1">
      <div>
        <h1>Minimum Blank Size</h1>
      </div>
      <div className="flex flex-row flex-wrap p-4 gap-6">
        <Input
          value={rightPD}
          onChange={updateRightPD}
          type="number"
          label="Right PD (mm)"
          name="rightpd"
          step="0.1"
          isError={errorRightPD.isError}
          errorMessage={errorRightPD.errorMessage}
        />
        <Input
          value={leftPD}
          onChange={updateLeftPD}
          type="number"
          label="Left PD (mm)"
          name="leftpd"
          step="0.1"
          isError={errorLeftPD.isError}
          errorMessage={errorLeftPD.errorMessage}
        />
        <Input
          value={frameDBL}
          onChange={updateFrameDBL}
          type="number"
          label="Frame DBL (mm)"
          name="framedbl"
          step="0.1"
          isError={errorFrameDBL.isError}
          errorMessage={errorFrameDBL.errorMessage}
        />
        <Input
          value={frameSize}
          onChange={updateFrameSize}
          type="number"
          label="Frame Size (mm)"
          name="framesize"
          step="0.1"
          isError={errorFrameSize.isError}
          errorMessage={errorFrameSize.errorMessage}
        />
        <Input
          value={effectiveDiameter}
          onChange={updateEffectiveDiameter}
          type="number"
          label="Effective Diameter (mm)"
          name="effectivediameter"
          step="0.1"
          isError={errorEffectiveDiameter.isError}
          errorMessage={errorEffectiveDiameter.errorMessage}
        />
      </div>
      <div className="p-4">
        <CalculateMinimumBlankSize
          rightPD={rightPD}
          leftPD={leftPD}
          frameDBL={frameDBL}
          frameSize={frameSize}
          effectiveDiameter={effectiveDiameter}
          anyErrors={[
            errorRightPD.isError,
            errorLeftPD.isError,
            errorFrameSize.isError,
            errorFrameDBL.isError,
            errorEffectiveDiameter.isError,
          ]}
        />
      </div>
    </div>
  );
};

export default MinimumBlankSize;
