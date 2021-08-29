// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = require('../../utils/data')

export default function handler(_req, res) {
	res.status(200).json(data)
}
