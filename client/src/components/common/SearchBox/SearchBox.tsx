import React, { FC } from "react";
import { useAsyncDebounce } from "react-table";
import { GoSearch } from "react-icons/go";
import { Icon, Input, SearchBoxWrapper } from "./SearchBox.styled";

interface SearchBoxProps {
  setGlobalFilter: (value: string) => void;
  globalFilter: string;
}

export const SearchBox: FC<SearchBoxProps> = ({ setGlobalFilter,  globalFilter }) => {
  const [value, setValue] = React.useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

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
		<GoSearch />
	  </Icon>
	</SearchBoxWrapper>
  );
};

export default SearchBox;
