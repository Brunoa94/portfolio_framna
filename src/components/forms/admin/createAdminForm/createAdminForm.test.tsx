import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { useAlertStore } from "@/hooks/useAlertStore";
import CreateUserForm from "./createAdminForm";
import { CreateAdminI } from "@/types/admin";
import AdminsService from "@/services/admins";

jest.mock("@/services/admins", () => ({
  __esModule: true,
  default: {
    createAdmin: jest.fn(),
  },
}));

jest.mock("@/hooks/useAlertStore", () => ({
  useAlertStore: jest.fn(),
}));

const mockedUsersService = jest.mocked(AdminsService);

describe("Create User form", () => {
  const mockHandleClose = jest.fn();
  const mockUpdateAlert = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAlertStore as jest.Mock).mockImplementation((selector) =>
      selector({ updateAlert: mockUpdateAlert })
    );
  });

  it("with valid values submit request and show alert with successfull message", async () => {
    const successfullMessage = {
      message: "User created",
      status: 200,
    };

    const body: CreateAdminI = {
      username: "mocked-username",
      password: "mocked-password",
    };

    mockedUsersService.createAdmin.mockResolvedValueOnce({ ...body, id: 1 });

    render(<CreateUserForm handleClose={mockHandleClose} />);

    const titleInput = screen.getByLabelText(/Username/i);
    fireEvent.change(titleInput, { target: { value: body.username } });

    const descriptionInput = screen.getByLabelText(/Password/i);
    fireEvent.change(descriptionInput, {
      target: { value: body.password },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(AdminsService.createAdmin).toHaveBeenCalledWith(body);
      expect(mockUpdateAlert).toHaveBeenCalledWith(successfullMessage);
      expect(mockHandleClose).toHaveBeenCalled();
    });
  });
});
