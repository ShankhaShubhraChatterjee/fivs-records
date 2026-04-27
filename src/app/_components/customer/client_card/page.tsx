import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { clientList } from "../../../../../tests/data/client.data"

export default function ClientCard() {
    return (
        <Card className=" w-full pt-0 px-3 h-[500px]">
            <Input placeholder="Search For A Specific Client ..." name="search" className="mt-2 py-2"/>
            <Table>
                <TableCaption>You have reached the end</TableCaption>
                <TableHeader className="bg-indigo-700">
                    <TableRow>
                        <TableHead className="w-full rounded-tl-xl text-white">Client ID</TableHead>
                        <TableHead className="text-white">Status</TableHead>
                        <TableHead className="text-right rounded-tr-xl text-white">Amount Remaining</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {clientList.map((client) => (
                        <TableRow key={client.username}>
                            <TableCell className="font-medium">{client.username}</TableCell>
                            <TableCell>{client.paymentStatus}</TableCell>
                            <TableCell className="text-right">{client.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell className="text-right">2500</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Card>
    )
}
