import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FooterCard() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <CardHeader className="pt-3">
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>FIVS Pvt. Ltd.</CardTitle>
        <CardDescription>
          <p>&copy; S.S.Chatterjee, 2026</p>
          <p>All Rights Reserved.</p>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
