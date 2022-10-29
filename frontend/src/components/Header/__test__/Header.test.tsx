import React from "react";
import renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
import Header from "../Header";

describe("Tests for Header component", () => {
  test("renders", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
