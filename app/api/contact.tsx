import { NextApiRequest, NextApiResponse } from "next";

type formData = {
    fName: string,
    lName: string, 
    email: string, 
    message: string
}

function isValidBody<T extends Record<string, unknown>>(
    body: any,
    fields: (keyof T)[],
  ): body is T {
    return Object.keys(body).every((key) => fields.includes(key))
  }



async function handler(req: NextApiRequest, res: NextApiResponse){
    if (!isValidBody<formData>(req.body, ['fName', 'lName', 'email', 'message'])) {
        return res.status(402)
    }

    
}