import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.services";
import { userService } from "@/services/user.services";
import { cookies } from "next/headers";


export default async function Home() {

//  const {data , error} =await userService.getSession();
//  console.log("Session data in page.tsx:", data);
const {data} = await blogService.getBlogPosts();
console.log("Blog posts data in page.tsx:", data);
  return(
    <div>
      <Button>Click here</Button>
    </div>
  )
 
}
