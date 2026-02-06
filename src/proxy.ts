import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.services";
import { ROLES } from "./constants/roles";
//proctedt routing here
export async function proxy(request: NextRequest) {
    // console.log("hello from proxy ", request.url);
    const pathname = request.nextUrl.pathname;
    console.log("pathname", pathname);
    let isAuthenticated = false;
    let isAdmin = false;

    const { data } = await userService.getSession();
    if (data) {
        isAuthenticated = true;
        isAdmin = data.user?.role === ROLES.ADMIN ? true : false;
    }
    // console.log(data);
    //if user is not autheticated
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    //authenticaated and admin trying to access dashboard
    if (isAdmin && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }
    //authenticated but not admin trying to access admin dashboard
    if(!isAdmin && pathname.startsWith("/admin-dashboard")){
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next();

}
export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/:path*",
        "/admin-dashboard",
        "/admin-dashboard/:path*"



    ],
};