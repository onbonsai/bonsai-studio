import { NextApiRequest, NextApiResponse } from 'next';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
};
