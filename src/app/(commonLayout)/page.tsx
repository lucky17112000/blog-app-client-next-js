import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";


export default async function Home() {

  // const session = await authClient.getSession();//for test database connect or not
  return(
    <div>
      <Button>Click here</Button>
    </div>
  )
 
}
