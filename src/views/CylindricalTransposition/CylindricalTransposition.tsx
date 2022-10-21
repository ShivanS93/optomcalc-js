import { useState, ChangeEvent, FunctionComponent } from "react";
import CustomInput from "../../components/CustomInput";
import Output from "../../components/Output";

function calculateCylindricalTransposition(
  sphere: string,
  cylinder: string,
  axis: string,
) {
  // performing cylindrical transposition
  // convert types
  let sphereNumber = Number(sphere);
  let cylinderNumber = Number(cylinder);
  let axisNumber = Number(axis);

  const transposedSphere = (sphereNumber + cylinderNumber).toFixed(2);
  const transposedCylinder = (cylinderNumber * -1).toFixed(2);
  let transposedAxis;
  if (axisNumber <= 90) {
    transposedAxis = Number(axisNumber) + 90;
  } else if (axisNumber === 180) {
    transposedAxis = 90;
  } else if (axisNumber > 90) {
    transposedAxis = 180 - axisNumber;
  }
  return {
    sphere: transposedSphere,
    cylinder: transposedCylinder,
    axis: transposedAxis,
  };
}

const CylindricalTransposition: FunctionComponent = () => {
  // main component to be used

  const [sphere, setSphere] = useState("");
  const [sphereError, setSphereError] = useState({
    isError: false,
    errorMessage: "",
  });
  const [cylinder, setCylinder] = useState("");
  const [cylinderError, setCylinderError] = useState({
    isError: false,
    errorMessage: "",
  });
  const [axis, setAxis] = useState("");
  const [axisError, setAxisError] = useState({
    isError: false,
    errorMessage: "",
  });
  const updateSphere = (e: ChangeEvent<HTMLInputElement>) => {
    setSphereError({ isError: false, errorMessage: "" });
    if (!e.target.value) {
      setSphereError({ isError: true, errorMessage: "Please enter sphere" });
    }
    setSphere(e.target.value);
  };
  const updateCylinder = (e: ChangeEvent<HTMLInputElement>) => {
    setCylinderError({ isError: false, errorMessage: "" });
    if (!e.target.value) {
      setCylinderError({
        isError: true,
        errorMessage: "Please enter cylinder",
      });
    }
    setCylinder(e.target.value);
  };
  const updateAxis = (e: ChangeEvent<HTMLInputElement>) => {
    let axis = Number(e.target.value);
    setAxisError({
      isError: false,
      errorMessage: "",
    });
    if (!e.target.value) {
      setAxisError({
        isError: true,
        errorMessage: "Please enter axis",
      });
    } else if (axis > 180 || axis < 0) {
      setAxisError({
        isError: true,
        errorMessage: "Axis must between 180 and 0 degrees",
      });
    }
    setAxis(e.target.value);
  };

  return (
    <div className="grid grid-rows-1">
      <div>
        <h1>Cylindrical Transposition</h1>
      </div>
      <div className="flex flex-row flex-wrap p-4 gap-6">
        <CustomInput
          value={sphere}
          onChange={updateSphere}
          type="number"
          label="Sphere (DS)"
          name="sphere"
          step="0.25"
          isError={sphereError.isError}
          errorMessage={sphereError.errorMessage}
        />
        <CustomInput
          value={cylinder}
          onChange={updateCylinder}
          type="number"
          label="Cylinder (DC)"
          name="cylinder"
          step="0.25"
          isError={cylinderError.isError}
          errorMessage={cylinderError.errorMessage}
        />
        <CustomInput
          value={axis}
          onChange={updateAxis}
          type="number"
          label="Axis (degrees)"
          name="axis"
          step="0.5"
          isError={axisError.isError}
          errorMessage={axisError.errorMessage}
          min="0"
          max="180"
        />
      </div>
      <div className="p-4">
        <Output
          sphereValue={sphere}
          cylinderValue={cylinder}
          axisValue={axis}
          calculationFunction={calculateCylindricalTransposition}
          anyErrors={[
            sphereError.isError,
            cylinderError.isError,
            axisError.isError,
          ]}
        />
      </div>
    </div>
  );
};

export default CylindricalTransposition;
