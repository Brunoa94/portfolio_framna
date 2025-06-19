import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginAdminForm from "./loginAdminForm";
import { useAlertStore } from "@/hooks/useAlertStore";
import { signIn } from "next-auth/react";
import { LoginUserI } from "@/types/user";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

jest.mock("@/hooks/useAlertStore", () => ({
  useAlertStore: jest.fn(),
}));

const mockUpdateAlert = jest.fn();
const mockHandleClose = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();

  (useAlertStore as jest.Mock).mockImplementation((selector) =>
    selector({ updateAlert: mockUpdateAlert })
  );
});

const body: LoginUserI = {
  username: "mocked-username",
  password: "mocked-password",
};

describe("Login Admin form", () => {
  it("logins successfully with valid credentials", async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({ ok: true });

    render(<LoginAdminForm handleClose={mockHandleClose} />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: body.username },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: body.password },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("credentials", {
        ...body,
        redirect: false,
      });
      expect(mockUpdateAlert).toHaveBeenCalledWith({
        message: "Admin logged in",
        status: 200,
      });
      expect(mockHandleClose).toHaveBeenCalled();
    });
  });

  it("calls updateAlert with error if signIn fails", async () => {
    (signIn as jest.Mock).mockRejectedValueOnce({ ok: false });

    render(<LoginAdminForm handleClose={mockHandleClose} />);

    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: body.username },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: body.password },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(mockUpdateAlert).toHaveBeenCalledWith({
        message: "Authentication failed",
        status: 401,
      });
      expect(mockHandleClose).toHaveBeenCalled();
    });
  });
});
