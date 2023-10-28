import * as React from "react";

type Props = {
    size?: number;
    color?: string;
};

export function CChat({ size = 24, color, ...props }: Props) {
    return (
        <svg
            id="CChat"
            data-name="CChat"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145 126"
            width={size}
            {...props}
        >
            <defs>
                <style>{".cls-1{fill:#fff}"}</style>
            </defs>
            <path
                d="M127.64 99.4h-7.13c-2.68 0-4.86 2.54-4.86 5.67v3.58c0 4.87-4.92 7.47-8.06 4.26l-11.82-12.1c-.89-.91-2.02-1.41-3.2-1.41H53.14c-2.68 0-4.86-2.54-4.86-5.67V34.89c0-3.13 2.17-5.67 4.86-5.67h74.5c2.68 0 4.86 2.54 4.86 5.67v58.84c0 3.13-2.17 5.67-4.86 5.67Z"
                style={{
                    fill: "#0475ef",
                }}
            />
            <path
                d="M91.68 81.85H60.6c-1.27 0-2.5.56-3.43 1.57L43.29 98.5c-3.13 3.4-8.25.98-8.46-4.01l-.3-7.06c-.13-3.13-2.34-5.58-5.03-5.58H17.54c-2.78 0-5.03-2.63-5.03-5.87V17.55c0-3.24 2.25-5.87 5.03-5.87h74.14c2.78 0 5.03 2.63 5.03 5.87v58.43c0 3.24-2.25 5.87-5.03 5.87Z"
                style={{
                    fill: "#0969e1",
                }}
            />
            <path
                className="cls-1"
                d="M22.32 29.22h40.7v5.61h-40.7zM22.32 39.75h25.96v5.61H22.32z"
            />
        </svg>
    );
}
