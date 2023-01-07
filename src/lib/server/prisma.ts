import { PrismaClient } from "@prisma/client"
import { DATABASE_URL } from "$env/static/private"

interface CustomNodeJSGlobal extends NodeJS.Global {
	prisma: PrismaClient
}

declare const global: CustomNodeJSGlobal

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") {
	global.prisma = prisma
}

export { prisma }
