import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, removeEventListener, next) => {
    try {
        const { userid } = req.auth();
        const user = await clerakClient.users.getUser(userId)
        if (user.privateMetadata.role !== 'admin') {
            return res.json({ success: false, message: "not authorized" })
            
        }
        next();
    } catch (error) {
        return res.json({ success: false, message: "not authorized" });

    }
}