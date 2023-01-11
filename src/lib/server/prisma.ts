import { PrismaClient } from "@prisma/client"

interface CustomNodeJSGlobal extends NodeJS.Global {
	p: PrismaClient
}

declare const global: CustomNodeJSGlobal

const p = global.p || new PrismaClient()

if (process.env.NODE_ENV === "development") {
	global.p = p
}

export { p }
