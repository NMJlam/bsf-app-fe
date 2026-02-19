import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Login to your Account</CardTitle>
        </CardHeader>
        <CardFooter className="justify-center">
          <Button className="w-full"> Login with Google </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
