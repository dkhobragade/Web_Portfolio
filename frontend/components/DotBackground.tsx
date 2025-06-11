import React from "react";
import { cn } from "@/lib/utils";

interface BgProps
{
    children: React.ReactNode
}

export function DotBackground ( props: BgProps )
{
    return (
        <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black">
            <div
                className={ cn(
                    "absolute inset-0 z-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                ) }
            />
            <div className="relative z-10 w-full h-full">
                { props.children }
            </div>
        </div>
    );
}

