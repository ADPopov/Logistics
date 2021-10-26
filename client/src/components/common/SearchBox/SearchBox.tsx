import React, {FC} from "react";
import {Row, useAsyncDebounce} from "react-table";
import {Request} from "../../../models/Request";
import {GoSearch} from "react-icons/go";
import {Icon, Input, SearchBoxWrapper} from "./SearchBox.styled";

interface SearchBoxProps {
    preGlobalFilteredRows: Row<Request>[];
    setGlobalFilter: (value: string) => void;
    globalFilter: string;
}

export const SearchBox: FC<SearchBoxProps> = ({
                                                  preGlobalFilteredRows,
                                                  setGlobalFilter,
                                                  globalFilter,
                                              }) => {
    const [value, setValue] = React.useState(globalFilter);

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 400);

    return (
        <SearchBoxWrapper>
            <Input
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder="Поиск"
            />
            <Icon>
                <GoSearch/>
            </Icon>
        </SearchBoxWrapper>
    );
};

export default SearchBox;
