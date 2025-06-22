import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./navbar";

describe("Navbar", () => {
  it("renders About Me and Projects when user is not logged", () => {
    render(<Navbar isMobile={false} isLogged={false} />);

    const links = screen.getAllByTestId("navbar-link");

    expect(links.length).toBe(2);
  });

  it("renders About Me, Projects and Admin dashboard when user is logged and is mobile", () => {
    render(<Navbar isMobile={true} isLogged={true} />);

    const links = screen.getAllByTestId("navbar-link");

    expect(links.length).toBe(3);
  });

  it("renders About Me, Projects when user is logged but is not mobile", () => {
    render(<Navbar isMobile={false} isLogged={true} />);

    const links = screen.getAllByTestId("navbar-link");

    expect(links.length).toBe(2);
  });
});
