import { env } from "@/env"

const API_URL = env.API_URL;
//1.no dynamic and {cache: no store}->SSG(static site generation)
//2.cach :No store->SSR(server side rendering)
//3. next: {revalidate:10}->ISR(incremental static regeneration)mix between static and dynamic page

//this is totally basic static dynamic and between things are clear by this service file.but in this file we are using only 
interface GetBlogsParams {
    isFeatured?: boolean;
    serach?: string;
    status?:string;

}
interface ServiceOptions{
    cache?:RequestCache
    reValidate?:number
    
}
export const blogService = {
    getBlogPosts: async function (params?: GetBlogsParams, options?:ServiceOptions) {
        try {
            const url = new URL(`${API_URL}/posts`);
            if(params){
                Object.entries(params).forEach(([key , value])=>{
                    if(value !== undefined && value !==  null && value !==""){
                        url.searchParams.append(key , value)
                    }
                })

            }
            // url.searchParams.append("key" , "value");
            const config:RequestInit={};
            if(options?.cache){
                config.cache=options.cache;
            }
            if(options?.reValidate){
                config.next = { revalidate: options.reValidate };
            }
             console.log("Constructed URL:", url.toString());
            const res = await fetch(url.toString(), config);

            const data = await res.json();
            return { data: data, error: null }
        } catch (error) {
            return { data: null, error: { message: "Error fetching blog posts" } }
        }
    },
}