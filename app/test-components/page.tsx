import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight, Download } from "lucide-react";

export default function TestComponents() {
    return (
        <div className="min-h-screen bg-primary text-white p-10 space-y-20">
            <SectionWrapper>
                <h1 className="text-4xl font-heading font-bold mb-10">Component Test Page</h1>

                {/* Buttons */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-white/20 pb-2">Buttons</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button>Primary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <Button variant="ghost">Ghost Button</Button>
                        <Button size="sm">Small</Button>
                        <Button size="lg">Large</Button>
                        <Button rightIcon={<ArrowRight size={16} />}>With Icon</Button>
                        <Button isLoading>Loading</Button>
                    </div>
                </div>

                {/* Cards */}
                <div className="space-y-6 mt-10">
                    <h2 className="text-2xl font-semibold border-b border-white/20 pb-2">Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <h3 className="text-xl font-bold mb-2">Standard Card</h3>
                            <p className="text-text-secondary">This is a standard glass card with hover effect.</p>
                        </Card>
                        <Card className="border-accent-1/50">
                            <h3 className="text-xl font-bold mb-2 text-accent-1">Accent Card</h3>
                            <p className="text-text-secondary">Card with custom border color.</p>
                        </Card>
                        <Card hoverEffect={false}>
                            <h3 className="text-xl font-bold mb-2">No Hover Effect</h3>
                            <p className="text-text-secondary">Static card without lift animation.</p>
                        </Card>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
