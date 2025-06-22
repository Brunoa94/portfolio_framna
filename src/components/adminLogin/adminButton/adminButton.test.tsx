import React from "react";
import { render, screen } from "@testing-library/react";
import AdminButton from "./adminButton";
import { useSession } from "next-auth/react";

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signOut: jest.fn(),
}));

describe("Testing Admin button component", () => {
  it("renders admin logout button and link to navigate to user dashboard when session exists", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "mock-user" } },
      status: "authenticated",
    });

    render(<AdminButton />);

    expect(screen.getByText("Admin Dashboard")).toBeInTheDocument();
  });

  it("renders admin login button when no session exists", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<AdminButton />);

    expect(screen.getByText("Login as Admin")).toBeInTheDocument();
  });
});
