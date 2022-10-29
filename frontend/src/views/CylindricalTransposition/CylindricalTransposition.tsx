import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { apiClient } from "../../lib/httpCommon";
import { useMutation } from "@tanstack/react-query";

interface Prescription {
  sphere: number;
  cylinder: number;
  axis: number;
}

const provideCylindricalTransposition = async (data: Prescription) => {
  console.log("data", data);
  const response = await apiClient.post("cylindrical_transposition/", data);
  console.log("response", response);
  return response;
};

const CylindricalTransposition: React.FC = () => {
  const [sphere, setSphere] = useState<string>("");
  const [cylinder, setCylinder] = useState<string>("");
  const [axis, setAxis] = useState<string>("");

  const mutation = useMutation((prescription) => {
    return apiClient.post("cylindrical_transposition/", prescription);
  });

  if (sphere || cylinder || axis) {
    mutation.mutate({ sphere: sphere, cylinder: cylinder, axis: axis });
  }

  console.log("response data", mutation.data);

  const handleOnChangeSphere = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSphere(e.target.value);

  const handleOnChangeCylinder = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCylinder(e.target.value);

  const handleOnChangeAxis = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAxis(e.target.value);

  return (
    <div className="grid grid-rows-1">
      <div>
        <h1>Cylindrical Transposition</h1>
      </div>
      <div className="flex flex-row flex-wrap p-4 gap-6">
        <CustomInput
          value={sphere}
          onChange={handleOnChangeSphere}
          type="number"
          label="Sphere (DS)"
          name="sphere"
          step="0.25"
          isError={false}
          errorMessage={""}
        />
        <CustomInput
          value={cylinder}
          onChange={handleOnChangeCylinder}
          type="number"
          label="Cylinder (DC)"
          name="cylinder"
          step="0.25"
          isError={false}
          errorMessage={""}
        />
        <CustomInput
          value={axis}
          onChange={handleOnChangeAxis}
          type="number"
          label="Axis (degrees)"
          name="axis"
          step="0.5"
          isError={false}
          errorMessage={""}
          min="0"
          max="180"
        />
      </div>
      <div className="p-4">
        {mutation.isError && "Error"}
        {mutation.isLoading && "Loading"}
        {mutation.isSuccess && mutation.data && "Success"}
      </div>
    </div>
  );
};

export default CylindricalTransposition;
