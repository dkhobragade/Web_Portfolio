"use client";

import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

interface ButtonProps
{
    text: string
}

export function GradientButton ( props: ButtonProps )
{
    return (
        <div className="m-10 flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                duration={ 1 }
                className="dark:bg-black cursor-pointer bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <span>{ props.text }</span>
            </HoverBorderGradient>
        </div>
    );
}
