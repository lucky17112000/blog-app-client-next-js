
import BlogCard from "@/components/modules/homepage/blogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.services";
import { userService } from "@/services/user.services";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";


export default async function Home() {

//  const {data , error} =await userService.getSession();
//  console.log("Session data in page.tsx:", data);
const {data} = await blogService.getBlogPosts();
console.log("Blog posts data in page.tsx:", data.data);
  return(
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6 py-10">
    {
      data?.data?.map((post:BlogPost)=>{
        return <BlogCard key = {post.id} post = {post}/>
      })
    }
    </div>
  )
 
}
