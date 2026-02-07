import { env } from "@/env"

const API_URL = env.API_URL;
//1.no dynamic and {cache: no store}->SSG(static site generation)
//2.cach :No store->SSR(server side rendering)
//3. next: {revalidate:10}->ISR(incremental static regeneration)mix between static and dynamic page

//this is totally basic static dynamic and between things are clear by this service file.but in this file we are using only 

export const blogService = {
    getBlogPosts: async function () {
        try {
            const res = await fetch(`${API_URL}/posts`, {
               next: {revalidate:10}
               //initially static side and 10 sec po por data update hobe without any command behind the scene it will auto build.after 10 sec all user get new data
            });

            const data = await res.json();
            return { data: data, error: null }
        } catch (error) {
            return { data: null, error: { message: "Error fetching blog posts" } }
        }
    },
}