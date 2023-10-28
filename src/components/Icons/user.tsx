import * as React from "react";

type Props = {
    size?: number;
    color?: string;
    className?: string;
};

export function Avatar({ size = 24, color, className, ...props }: Props) {
    return (
        <svg
            id="USER"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
            width={size}
            {...props}
        >
            <defs>
                <style>
                    {`.cls-1{fill:${color};stroke:${color};stroke-miterlimit:10}`}
                </style>
            </defs>
            <circle className="cls-1" cx={12} cy={8} r={4} />
            <path
                className="cls-1"
                d="M8 14.5h8c1.1 0 2 .9 2 2v3H6v-3c0-1.1.9-2 2-2Z"
            />
        </svg>
    );
}
