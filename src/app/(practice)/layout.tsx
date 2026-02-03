import { Button } from "@/components/ui/button"

export default function practiceLayout({ children, marketingSlot, salesSlot }: { children: React.ReactNode, marketingSlot: React.ReactNode, salesSlot: React.ReactNode }) {
    return (
        <div>
            <Button asChild><a href="/marketing">Marketing</a></Button>
            <Button asChild><a href="/sales">Sales</a></Button>
            <div className="flex"> <div>{marketingSlot}</div>
                <div>{salesSlot}</div></div>
            <div>{children}</div>
        </div>
    );
}