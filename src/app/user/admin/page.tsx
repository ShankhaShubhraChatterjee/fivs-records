import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default function Admin() {
	const cardList = [
		{ id: 1, title: "Total Number of Clients", value: 100 },
		{ id: 2, title: "Total Number of Investors", value: 40 },
		{ id: 3, title: "Total Number of Blogs", value: 20 },
		{ id: 4, title: "Total Profit", value: 2400 },
	]
	return (
		<div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 grid-rows-4 grid-cols-1 px-4">
			{cardList.map((card) => {
				return (
					<Card key={card.id} size="default" className="mx-auto w-full">
				<CardHeader>
					<CardTitle>{card.title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-4xl font-bold">
						{card.value}
					</p>
				</CardContent>
			</Card>
				)
			})}
		</div>
	)
}