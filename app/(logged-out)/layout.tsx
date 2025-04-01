import { LightDarkToggle } from "@/components/ui/light-dark-toggle"

type Props = {
    children?: React.ReactNode
}

export default function LoggedOutLayout({children}: Props) {
return (
    <>
    <div className="flex flex-col min-h-screen gap-4 items-center justify-center p-24">
        {children}
    </div>
    <LightDarkToggle className="fixed top-[calc(50%-12px)] right-4" />
    </>
)
}