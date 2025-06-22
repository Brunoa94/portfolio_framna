import { fireEvent, render, screen } from "@testing-library/react";
import LoginAdmin from "./loginAdmin";
import { AlertStoreProvider } from "@/providers/alertStoreProvider";

describe("Testing the login adming button", () => {
  it("Renders Login form when login is clicked", () => {
    render(
      <AlertStoreProvider>
        <LoginAdmin />
      </AlertStoreProvider>
    );

    fireEvent.click(screen.getByText("Login as Admin"));

    expect(screen.getByTestId("login-admin-form")).toBeInTheDocument();
  });
});
