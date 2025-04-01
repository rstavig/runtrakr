import { Card, CardContent, CardHeader, CardTitle
 } from "@/components/ui/card";
import AddNewButton from "./add-new-button";

 export default function RunStats() {
    return <div className="grid md:grid-cols-3 gap-5">
        <Card className="border-amber-500">
            <CardHeader>
                <CardTitle>Hills</CardTitle>
            </CardHeader>
            <CardContent>
            card 1
            </CardContent>
          <AddNewButton />
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Runs</CardTitle>
            </CardHeader>
            <CardContent>
            card 2
            </CardContent>
            <AddNewButton />
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Dots</CardTitle>
            </CardHeader>
            <CardContent>
            card 3
            </CardContent>
            <AddNewButton />
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Races</CardTitle>
            </CardHeader>
            <CardContent>
            card 4
            </CardContent>
            <AddNewButton />
        </Card>
        <Card className="border-amber-500">
        <CardHeader>
                <CardTitle>Exercises</CardTitle>
            </CardHeader>
            <CardContent>
            card 5
            </CardContent>
            <AddNewButton />
        </Card>
    </div>
 }