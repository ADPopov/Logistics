import React, {FC, useState} from 'react';
import {Icon} from "./TableActions.styled";
import {AiOutlineEdit} from "react-icons/ai";
import {BiTrash} from "react-icons/bi";
import Modal from "../../../common/Modal/Modal";
import data from '../../../../MOCK_DATA.json'
import {Request} from "../../../../models/Request";

interface TableActionsProps {
    rowIdx: string
}

export const TableActions: FC<TableActionsProps> = ({rowIdx}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [request, setRequest] = useState<Request | null>();

    const handleClick = () => {
        setIsOpen(true)
    }

    const openRequest = (rowIdx: string) => {
        const request = data.filter((data) => data.id === Number(rowIdx));
        console.log(request)
    }

    const removeRequest = (rowIdx: string) => {

    }

    return (
        <div>
            <Icon onClick={() => openRequest(rowIdx)}>
                <AiOutlineEdit size={20}/>
            </Icon>
            <Icon onClick={() => removeRequest(rowIdx)}>
                <BiTrash size={20}/>
            </Icon>
            {isOpen ? <Modal onClose={() => setIsOpen(false)}/> : null}
        </div>
    );
};

export default TableActions;