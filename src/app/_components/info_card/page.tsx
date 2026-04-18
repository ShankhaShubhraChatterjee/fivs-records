import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InfoCard() {
    return (
        <Card className="w-full max-w-xl md:w-lg">
            <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>
                    Account Details
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="fullname">Name</Label>
                            <Input
                                id="fullname"
                                type="text"
                                placeholder="John Doe"
                                disabled
                                className="disabled:opacity-100"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Address</Label>
                            <Input
                                id="address"
                                type="text"
                                placeholder="Nadia, West Bengal, India"
                                disabled
                                className="disabled:opacity-100"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                disabled
                                className="disabled:opacity-100"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="phone">Phone Number</Label>
                            </div>
                            <Input id="phone" type="text" placeholder="+91 9868885740" disabled className="disabled:opacity-100" />
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
