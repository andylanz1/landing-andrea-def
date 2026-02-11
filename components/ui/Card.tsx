import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass rounded-none p-6 transition-all duration-300 border border-white/10",
                    hoverEffect &&
                    "hover:bg-primary/80 hover:border-accent-1/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-1/10",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export { Card };
