/* eslint-disable @typescript-eslint/no-explicit-any */
// Prisma client is generated at runtime after `npx prisma generate`
// This pattern avoids multiple instances during hot reload
let PrismaClientClass: any;
try {
  PrismaClientClass = require("@prisma/client").PrismaClient;
} catch {
  PrismaClientClass = class MockPrisma {
    [key: string]: any;
    constructor() {
      return new Proxy(this, {
        get: () => () => Promise.resolve([]),
      });
    }
  };
}
const g = globalThis as unknown as { prisma: any };
export const prisma: any = g.prisma || new PrismaClientClass({ log: ["error"] });
if (process.env.NODE_ENV !== "production") g.prisma = prisma;
