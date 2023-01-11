import nodeMailer from "nodemailer"
import {
	EMAIL_SERVER_HOST,
	EMAIL_SERVER_PASSWORD,
	EMAIL_SERVER_PORT,
	EMAIL_SERVER_USER,
} from "$env/static/private"

const transport = nodeMailer.createTransport({
	host: EMAIL_SERVER_HOST,
	port: Number(EMAIL_SERVER_PORT),
	auth: {
		user: EMAIL_SERVER_USER,
		pass: EMAIL_SERVER_PASSWORD,
	},
})

export interface MailOptions {
	from: string
	subject: string
	to: string
	html: string
}

export function sendEmail(mailOptions: MailOptions) {
	return transport.sendMail(mailOptions, (error) => {
		if (error) {
			throw new Error("Error sending email")
		} else {
			console.log("Successfully sent email.")
		}
	})
}

export function sendMagicLinkEmail(email: string, token: string) {
	const mailOptions = {
		from: "hbytetest@gmail.com",
		subject: "Your Magic Link",
		to: email,
		html: magicLinkTemplate({
			email,
			link: `http://localhost:5173/auth/magic?token=${token}&identifier=${email}`,
		}),
	}

	return sendEmail(mailOptions)
}

interface MagicLinkOptions {
	email: string
	link: string
}

export function magicLinkTemplate({ email, link }: MagicLinkOptions) {
	return `
    <h3>Welcome back, ${email}</h3>
    <p>Here's the login link you requested</p>
    <p>${link}</p>
`
}
