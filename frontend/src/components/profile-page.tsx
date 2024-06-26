/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5EkjZV7vyHA
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProfilePage() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="border-b gap-2">
        <div className="space-y-1">
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your profile information.</CardDescription>
        </div>
        <Button size="sm">Edit</Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-1 p-4">
          <div className="flex items-center space-x-4">
            <div className="text-sm w-20">Name</div>
            <div className="font-semibold">Alice Smith</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm w-20">Email</div>
            <div className="font-semibold">alice@example.com</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm w-20">Phone</div>
            <div className="font-semibold">+1 (555) 123-4567</div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-sm w-20">Address</div>
            <div className="grid gap-1.5 leading-none">
              <div className="not-italic">1234 Sycamore Road</div>
              <div className="not-italic">Reston, VA 20190</div>
              <div className="not-italic">United States</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
