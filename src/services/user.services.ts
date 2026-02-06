import { env } from "@/env";
import { cookies } from "next/headers";
const AUTH_API=env.AUTH_URL;
export const userService = {
    getSession: async function () {

        try {
            // const session = await authClient.getSession();//for test database connect or not
            //this is server component for this resaon i have to send cookie manually like below
            const cookieStore = await cookies();
            //we can  catch specific cookie by name also
            //we can also set cookie manually but not served component
            // console.log(cookieStore.get("better-auth.session_token"))

            const res = await fetch(`${AUTH_API}/get-session`, {
                headers: {
                    Cookie: cookieStore.toString()//send all cookies
                },
                cache: "no-store"//disable nextjs cache for fetch
            });
            // console.log("Session data:", await res.json());
            const session = await res.json();
            if(session===null){
                return {data:null, error:{message: "No active session"}};
            }
            // console.log("Session data:", session);
            return {data:session, error:null};
        } catch (error) {
            console.error("Error fetching session:", error);
            return {data:null, error:{message: "Error fetching session"}};

        }
    }
}