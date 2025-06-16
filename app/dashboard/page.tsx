import  RunStats  from '@/app/dashboard/components/run-stats'
import LightDarkToggle from "@/components/ui/light-dark-toggle";

export default function DashboardPage() {
    return <div>
        <LightDarkToggle 
        className="fixed top-3 right-10"
        />
        <RunStats />
        </div>
}

