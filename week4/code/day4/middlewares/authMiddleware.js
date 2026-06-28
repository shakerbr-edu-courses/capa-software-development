import jwt from 'jsonwebtoken';

export const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({error: "You are not authorized to access this resource"})
    }

    // Bearer {token}
    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId
        req.userId = userId
        next()
    }catch {
        return res.status(401).json({error: "You are not authorized to access this resource"})
    }
}