import { SuccessI, ErrorI } from "@/types/api";
import { Admin } from "@/generated/prisma";
import AdminsService from "./admins";
import { CreateAdminI } from "@/types/admin";

global.fetch = jest.fn();

const mockedFetch = fetch as jest.Mock;

describe("Admins Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("on Create Admin", () => {
    const newAdmin: CreateAdminI = {
      username: "Create Mocked Admin",
      password: "MockedPassword123",
    };

    it("returns Admin data on success", async () => {
      const mockAdmin: Admin = {
        id: 1,
        username: newAdmin.username,
        password: newAdmin.password,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockAdmin,
      });

      const result = await AdminsService.createAdmin(newAdmin);

      expect(fetch).toHaveBeenCalledWith("/api/admins", expect.any(Object));
      expect(result).toEqual(mockAdmin);
    });

    it("throws error on existing Admin", async () => {
      const error: ErrorI = { message: "Admin exists", status: 400 };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const result = AdminsService.createAdmin(newAdmin);

      await expect(result).rejects.toEqual(error);
    });
  });

  describe("on Delete Admin", () => {
    it("returns message on success", async () => {
      const success: SuccessI = {
        message: "Deleted Successfully",
        status: 200,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => success,
      });

      const result = await AdminsService.deleteAdmin(1);

      expect(fetch).toHaveBeenCalledWith("/api/admins/1", expect.any(Object));
      expect(result).toEqual(success);
    });

    it("throws error object on delete failure", async () => {
      const error: ErrorI = { message: "Admin not found", status: 404 };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const result = AdminsService.deleteAdmin(123);

      await expect(result).rejects.toEqual(error);
    });
  });

  describe("on Get Admins", () => {
    it("returns List of Admins", async () => {
      const Admins: Admin[] = [
        { id: 1, username: "a", password: "p" },
        { id: 2, username: "b", password: "p" },
      ];

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => Admins,
      });

      const result = await AdminsService.getAdmins();

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_HOSTNAME}/api/admins`,
        expect.any(Object)
      );
      expect(result).toEqual(Admins);
    });

    it("throw error on get list failure", async () => {
      const error: ErrorI = {
        message: "Interval server error on Get Admins",
        status: 500,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const result = AdminsService.getAdmins();

      await expect(result).rejects.toEqual(error);
    });
  });
});
