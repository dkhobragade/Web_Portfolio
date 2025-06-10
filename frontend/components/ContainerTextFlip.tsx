"use client";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TextFilpProps
{
    words: string[]
    prefixText: string
    postfixText?: string
}

export function TextFlipContainer ( props: TextFilpProps )
{
    return (
        <motion.h1
            initial={ {
                opacity: 0,
            } }
            whileInView={ {
                opacity: 1,
            } }
            className={ cn(
                "relative mb-6 max-w-2xl text-left text-5xl leading-normal font-bold tracking-tight text-zinc-700 md:text-5xl dark:text-zinc-100",
            ) }
            layout
        >
            <div className="inline-block">
                { props.prefixText }<ContainerTextFlip words={ props.words } />{ props.postfixText }
            </div>
        </motion.h1>
    );
}
