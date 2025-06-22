import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skill from "./skill";

describe("Testing Skill component", () => {
  it("renders all the props", () => {
    render(<Skill name="React" icon={<svg data-testid="icon" />} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
