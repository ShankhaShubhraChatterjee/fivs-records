import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InfoCard() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>
                    Account Details
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="fullname">Name</Label>
                            <Input
                                id="fullname"
                                type="text"
                                defaultValue="John Doe"
                                disabled
                                className="disabled:opacity-100"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Address</Label>
                            <Input
                                id="address"
                                type="text"
                                defaultValue="Nadia, West Bengal, India"
                                disabled
                                className="disabled:opacity-100"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                defaultValue="random@gmail.com"
                                disabled
                                className="disabled:opacity-100"
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="phone">Phone Number</Label>
                            </div>
                            <Input id="phone" type="text" defaultValue="+91 9868885740" disabled className="disabled:opacity-100" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
