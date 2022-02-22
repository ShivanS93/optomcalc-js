import { FunctionComponent, PropsWithChildren } from "react";

interface OutputProps {
  sphereValue: string;
  cylinderValue: string;
  axisValue: string;
  calculationFunction: any;
  anyErrors: boolean[];
}

const Output: FunctionComponent<PropsWithChildren<OutputProps>> = (props) => {
  // Outputs sphere, cylinder and axis
  // checks for errors
  if (props.anyErrors.includes(true)) {
    return <></>;
  }
  const result = props.calculationFunction(
    props.sphereValue,
    props.cylinderValue,
    props.axisValue
  );
  return (
    <div className="cus-card">
      <p className="text-3xl">
        {result.sphere > 0 ? "+" : ""}
        {result.sphere} / {result.cylinder} x {result.axis}
      </p>
    </div>
  );
};

export default Output;
