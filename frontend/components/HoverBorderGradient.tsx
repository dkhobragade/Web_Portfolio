"use client";

import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function GradientButton ()
{
    return (
        <div className="m-10 flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                duration={ 3 }
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <span>Hire Me</span>
            </HoverBorderGradient>
        </div>
    );
}
