import type { NextApiRequest, NextApiResponse } from 'next';

export default function WaioApi(res: NextApiResponse, req: NextApiRequest) {
  res.status(200).json({
    "version": "0.5"
  })
}
