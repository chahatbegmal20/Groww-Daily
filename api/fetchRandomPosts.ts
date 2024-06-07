import { handleError } from "@/handlers";
/*
    Fetches random posts from the Unsplash API for the home page
*/
export async function fetchRandomPostsAPI(count = 10) {
    const NEXT_PUBLIC_UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&count=${count}`, {
            headers: { 
                'Accept-Version': 'v1'
            },
            next: { revalidate: 3600 },
        })
    
        const statusCode = response.status

        if (statusCode >= 400) {
            throw handleError(statusCode)
        }

        const data = await response.json()
        return data;
    }
    catch (error) {
        throw error;
    }
}