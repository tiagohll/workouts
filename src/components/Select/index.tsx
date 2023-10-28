"use client";

import { ComponentProps, useEffect, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

const select = tv({
    base: "rounded w-full",
    variants: {
        variant: {
            primary: "bg-gray-200 bg-zinc-800",
            secondary: "bg-secondary-800",
            outline: "bg-[#121212] border border-zinc-700",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

interface Options {
    id: number;
    name: string;
}

export type SelectProps = ComponentProps<"select"> &
    VariantProps<typeof select> & {
        search?: boolean;
        placeholder?: string;
        options: Options[];
        defaultValue?: string;
    };

export default function Select({
    search = true,
    variant,
    placeholder = "Selecione um opção",
    options,
    defaultValue,
    ...props
}: SelectProps) {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [openOption, setOpenOption] = useState(false);
    const [animation, setAnimation] = useState("select-show");
    const [searchValue, setSearchValue] = useState("");

    const openAndHide = () => {
        if (openOption) {
            setAnimation("select-hide");
            setTimeout(() => {
                setOpenOption(false);
            }, 190);
        } else {
            setOpenOption(true);
            setAnimation("select-show");
        }
    };

    useEffect(() => {
        if (openOption) {
            const handleOutsideClick = (event: MouseEvent) => {
                const target = event.target as HTMLElement;

                if (
                    !target.closest(".select-options") ||
                    target.closest(".close-select-options")
                ) {
                    openAndHide();
                }
            };

            document.addEventListener("mousedown", handleOutsideClick);

            return () => {
                document.removeEventListener("mousedown", handleOutsideClick);
            };
        }
    });

    const filteredOptions =
        searchValue.length > 0
            ? options.filter((option) =>
                  option.name.toLowerCase().includes(searchValue.toLowerCase())
              )
            : [];

    return (
        <>
            <div className={"flex flex-col gap-1 select-options"}>
                <div>
                    <button
                        onClick={openAndHide}
                        className={
                            select({ variant }) +
                            " flex items-center justify-between gap-3 w-full p-2 px-5"
                        }
                    >
                        {selectedOption ? selectedOption : placeholder}
                        <span className="material-symbols-outlined">
                            expand_more
                        </span>
                    </button>
                </div>
                <div className="relative z-50">
                    {openOption && (
                        <div
                            className={
                                select({ variant }) +
                                " w-full flex flex-col gap-1 absolute shadow max-h-[15.5em] " +
                                animation
                            }
                        >
                            {search && (
                                <div className="border-b border-zinc-700 p-1">
                                    <input
                                        type="text"
                                        className="w-full p-1 pl-9 focus:outline-none rounded bg-transparent placeholder:text-zinc-500"
                                        placeholder="Buscar..."
                                        value={searchValue}
                                        onChange={(e) =>
                                            setSearchValue(e.target.value)
                                        }
                                        autoFocus
                                    />

                                    <div className="relative text-zinc-500">
                                        <span className="material-symbols-outlined">
                                            search
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div className="messages-scroll overflow-y-scroll scroll-mx-2 flex flex-col gap-2">
                                {searchValue.length > 0 ? (
                                    filteredOptions.length > 0 ? (
                                        filteredOptions.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() =>
                                                    setSelectedOption(
                                                        option.name
                                                    )
                                                }
                                                className="hover:bg-zinc-700 p-2 rounded flex items-center gap-5 w-full pl-2"
                                            >
                                                <div>
                                                    {selectedOption ==
                                                    option.name ? (
                                                        <span className="material-symbols-outlined">
                                                            check
                                                        </span>
                                                    ) : (
                                                        <span className="material-symbols-outlined opacity-0">
                                                            check
                                                        </span>
                                                    )}
                                                </div>
                                                <span>{option.name}</span>
                                            </button>
                                        ))
                                    ) : (
                                        <span className="text-center p-3">
                                            Nenhum resultado encontrado.
                                        </span>
                                    )
                                ) : (
                                    options.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() =>
                                                setSelectedOption(option.name)
                                            }
                                            className="hover:bg-zinc-700 p-2 rounded flex items-center gap-5 w-full pl-2"
                                        >
                                            <div>
                                                {selectedOption ==
                                                option.name ? (
                                                    <span className="material-symbols-outlined">
                                                        check
                                                    </span>
                                                ) : (
                                                    <span className="material-symbols-outlined opacity-0">
                                                        check
                                                    </span>
                                                )}
                                            </div>
                                            <span>{option.name}</span>
                                        </button>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
