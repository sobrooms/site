import type { NextApiRequest, NextApiResponse } from 'next';

export default function useWaioApi(res: NextApiResponse, req: NextApiRequest) {
  return res.status(200).json({
    "version": "0.5"
  })
}
