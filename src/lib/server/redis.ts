import { createClient } from "redis"
import { REDIS_URL } from "$env/static/private"

export const redis = createClient({
	url: REDIS_URL,
})

await redis.connect()
