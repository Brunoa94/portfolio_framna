import { CreateUserI } from "@/types/user";
import { SuccessI, ErrorI } from "@/types/api";
import { User } from "@/generated/prisma";
import UsersService from "./users";

global.fetch = jest.fn();

const mockedFetch = fetch as jest.Mock;

describe("Users Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("on Create User", () => {
    const newUser: CreateUserI = {
      username: "Create Mocked User",
      password: "MockedPassword123",
    };

    it("returns user data on success", async () => {
      const mockUser: User = {
        id: 1,
        username: newUser.username,
        password: newUser.password,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      });

      const result = await UsersService.createUser(newUser);

      expect(fetch).toHaveBeenCalledWith("/api/users", expect.any(Object));
      expect(result).toEqual(mockUser);
    });

    it("throws error on existing user", async () => {
      const error: ErrorI = { message: "User exists", status: 400 };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const result = UsersService.createUser(newUser);

      await expect(result).rejects.toEqual(error);
    });
  });

  describe("on Delete User", () => {
    it("returns message on success", async () => {
      const success: SuccessI = {
        message: "Deleted Successfully",
        status: 200,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => success,
      });

      const result = await UsersService.deleteUser(1);

      expect(fetch).toHaveBeenCalledWith("/api/users/1", expect.any(Object));
      expect(result).toEqual(success);
    });

    it("throws error object on delete failure", async () => {
      const error: ErrorI = { message: "User not found", status: 404 };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const result = UsersService.deleteUser(123);

      await expect(result).rejects.toEqual(error);
    });
  });

  describe("on Get Users", () => {
    it("returns List of users", async () => {
      const users: User[] = [
        { id: 1, username: "a", password: "p" },
        { id: 2, username: "b", password: "p" },
      ];

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => users,
      });

      const result = await UsersService.getUsers();

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_HOSTNAME}/api/users`,
        expect.any(Object)
      );
      expect(result).toEqual(users);
    });

    it("throw error on get list failure", async () => {
      const error: ErrorI = {
        message: "Interval server error on Get users",
        status: 500,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const result = UsersService.getUsers();

      await expect(result).rejects.toEqual(error);
    });
  });
});
