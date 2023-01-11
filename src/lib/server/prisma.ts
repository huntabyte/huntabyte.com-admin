import { PrismaClient } from "@prisma/client"

interface CustomNodeJSGlobal extends NodeJS.Global {
	prisma: PrismaClient
}

declare const global: CustomNodeJSGlobal

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") {
	global.prisma = prisma
}

export { prisma }
