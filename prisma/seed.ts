import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
	const alice = await prisma.user.upsert({
		where: { email: "alice@prisma.io" },
		update: {},
		create: {
			email: "alice@prisma.io",
			name: "Alice",
			posts: {
				create: {
					title: "Check out Prisma with Next.js",
					content: "https://www.prisma.io/nextjs",
					published: true,
				},
			},
		},
	})
	const bob = await prisma.user.upsert({
		where: { email: "bob@prisma.io" },
		update: {},
		create: {
			email: "bob@prisma.io",
			name: "Bob",
			posts: {
				create: [
					{
						title: "Follow Prisma on Twitter",
						content: "https://twitter.com/prisma",
						published: true,
					},
					{
						title: "Follow Nexus on Twitter",
						content: "https://twitter.com/nexusgql",
						published: true,
					},
				],
			},
		},
	})
	console.log({ alice, bob })
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
