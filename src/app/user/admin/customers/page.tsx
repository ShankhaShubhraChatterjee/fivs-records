import ClientManager from "@/app/_components/admin/client-manager/page"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Customer() {
    return (
        <div className="flex justify-center align-center px-2">
            <Tabs defaultValue="summary" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="client">View Clients</TabsTrigger>
                    <TabsTrigger value="investor">View Investors</TabsTrigger>
                </TabsList>
                <TabsContent value="summary">
                    <Card>
                        <CardHeader>
                            <CardTitle>Summary</CardTitle>
                            <CardDescription>
                                View your key metrics and recent project activity. Track progress
                                across all your active projects.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            You have 12 active projects and 3 pending tasks.
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="client">
                    <ClientManager />
                </TabsContent>
                <TabsContent value="investor">
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                            <CardDescription>
                                Manage your account preferences and options. Customize your
                                experience to fit your needs.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                            Configure notifications, security, and themes.
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}