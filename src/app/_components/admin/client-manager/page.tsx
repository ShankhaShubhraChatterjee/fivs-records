import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ClientManager() {
  const clientList = [
    {
      id: 1,
      clientName: "Client Name 1",
      clientID: "clientid1",
      dateCreated: "02/10/2026",
      debt: "10000",
      roi: "10%",
      status: "Active",
      paymentStatus: "Paid"
    },
    {
      id: 2,
      clientName: "Client Name 2",
      clientID: "clientid2",
      dateCreated: "02/10/2026",
      debt: "10000",
      roi: "10%",
      status: "Active",
      paymentStatus: "Paid"
    },
    {
      id: 3,
      clientName: "Client Name 3",
      clientID: "clientid3",
      dateCreated: "02/10/2026",
      debt: "10000",
      roi: "10%",
      status: "Active",
      paymentStatus: "Paid"
    },
  ]
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-right">
          <TableHead>Client Name</TableHead>
          <TableHead>Client ID</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead>Debt</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead>ROI</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clientList.map((client) => {
          return (
            <TableRow key={client.id} className="text-right">
              <TableCell>{client.clientName}</TableCell>
              <TableCell>{client.clientID}</TableCell>
              <TableCell>{client.dateCreated}</TableCell>
              <TableCell>{client.debt}</TableCell>
              <TableCell>{client.status}</TableCell>
              <TableCell>{client.paymentStatus}</TableCell>
              <TableCell>{client.roi}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          )
        })}
        {/* <TableRow>
          <TableCell className="font-medium">Wireless Mouse</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mechanical Keyboard</TableCell>
          <TableCell>$129.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">USB-C Hub</TableCell>
          <TableCell>$49.99</TableCell>
          <TableCell className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontalIcon />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
  )
}
