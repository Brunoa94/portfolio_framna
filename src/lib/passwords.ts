import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  const salt = 10;
  return bcrypt.hash(password, salt);
}

export async function comparePasswords(
  password: string,
  hashPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashPassword);
}
