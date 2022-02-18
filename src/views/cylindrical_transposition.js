import { useState } from "react";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return {
    value: value,
    updateValue: updateValue,
  };
}

function calculateCylindricalTransposition(sphere, cylinder, axis) {
  // performing calculation
  const transposedSphere = Number(sphere) + Number(cylinder);
  const transposedCylinder = cylinder * -1;
  let transposedAxis;
  if (axis <= 90) {
    transposedAxis = axis + 90;
  } else if (axis === 180) {
    transposedAxis = 90;
  } else if (axis > 90) {
    transposedAxis = 180 - axis;
  }
  const transposedAxisReturned = transposedAxis;

  return {
    sphere: transposedSphere,
    cylinder: transposedCylinder,
    axis: transposedAxisReturned,
  };
}

const CylindricalTransposition = () => {
  // main component to be used

  const [sphere, setSphere] = useState();
  const updateSphere = (e) => {
    setSphere(e.target.value);
  };
  const [cylinder, setCylinder] = useState();
  const updateCylinder = (e) => {
    setCylinder(e.target.value);
  };
  const [axis, setAxis] = useState();
  const updateAxis = (e) => {
    setAxis(e.target.value);
  };

  const answer = calculateCylindricalTransposition(sphere, cylinder, axis);

  return (
    <>
      <h1 className="underline underline-offset-2">
        Cylindrical Transposition
      </h1>
      <input
        onChange={updateSphere}
        value={sphere}
        type="number"
        placeholder="Sphere (DS)"
        step="0.25"
      />
      <input
        onChange={updateCylinder}
        value={cylinder}
        type="number"
        placeholder="Cylinder (DC)"
      />
      <input
        onChange={updateAxis}
        value={axis}
        type="number"
        placeholder="Axis"
      />

      <p> sphere: {sphere}</p>
      <p> cylinder: {cylinder}</p>
      <p> axis: {axis}</p>

      <p> answer </p>
      <p>
        sph {answer.sphere} / {answer.cylinder} x {answer.axis}
      </p>
    </>
  );
};

export default CylindricalTransposition;

// checking if react versions are the same
// require("react-dom");
// window.React2 = require("react");
// console.log(window.React1 === window.React2);
