import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

export interface HeadlineTypedProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
    children: string;
}

export default function HeadlineTyped({ className, children, ...rest }: HeadlineTypedProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const h1Classes = cn(
        // Added font-bungee and whitespace-pre-line
        "z-10 cursor-default text-center font-bungee font-normal text-foreground whitespace-pre-line",
        "text-5xl tracking-tight sm:text-7xl md:text-8xl",
        "transition-all duration-300 ease-in-out",
        "[text-shadow:3px_3px_#ff6b4a,_4px_4px_#ff6b4a,_5px_5px_#ff6b4a]",
        "hover:[text-shadow:3px_3px_#4cc9f0,_4px_4px_#4cc9f0,_5px_5px_#4cc9f0]",
        className
    );

    if (!isMounted) {
        return (
            <h1 className={h1Classes} {...rest}>
                {children}
            </h1>
        );
    }

    return (
        <TypeAnimation
            sequence={[children]}
            wrapper="h1"
            cursor={false}
            className={h1Classes}
            {...rest}
        />
    );
}