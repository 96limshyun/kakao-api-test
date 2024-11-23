import React, { useRef, useState } from "react";

import { DEFAULT_GLOBAL_TARGET } from "@/constants";
import { TargetType } from "@/types/targetAPI";

import useBookQuery from "./useBookQuery";

const useSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [target, setTarget] = useState<TargetType>(DEFAULT_GLOBAL_TARGET);
    const {
        data: bookData,
        isLoading,
        isError,
    } = useBookQuery(target, searchValue);

    const searchRef = useRef<HTMLInputElement | null>(null);

    const handleDefaultSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const searchValue = searchRef.current?.value;
        if (searchValue === "") return console.log("빈값");
        if (searchValue) setSearchValue(searchValue);
    };
    return {
        searchRef,
        handleDefaultSubmit,
        bookData,
        isLoading,
        isError,
    };
};

export default useSearch;
