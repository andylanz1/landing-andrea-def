import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
}

const SectionWrapper = React.forwardRef<HTMLDivElement, SectionWrapperProps>(
    ({ className, children, id, ...props }, ref) => {
        return (
            <section
                id={id}
                ref={ref}
                className={cn("py-20 md:py-32 overflow-hidden", className)}
                {...props}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    {children}
                </div>
            </section>
        );
    }
);

SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
