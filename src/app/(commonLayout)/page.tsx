import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";


export default async function Home() {

  // const session = await authClient.getSession();//for test database connect or not
  //this is server component for this resaon i have to send cookie manually like below
  const cookieStore =await cookies();
  //we can  catch specific cookie by name also
  //we can also set cookie manually but not served component
  console.log(cookieStore.get("better-auth.session_token"))

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers:{
      Cookie: cookieStore.toString()//send all cookies
    },
    cache: "no-store"//disable nextjs cache for fetch
  });
  // console.log("Session data:", await res.json());
  const session = await res.json();
  console.log("Session data:", session);

  return(
    <div>
      <Button>Click here</Button>
    </div>
  )
 
}
