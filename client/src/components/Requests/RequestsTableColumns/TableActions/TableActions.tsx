import React, {FC, useState} from 'react';
import {Icon} from "./TableActions.styled";
import {AiOutlineEdit} from "react-icons/ai";
import {BiTrash} from "react-icons/bi";
import Modal from "../../../common/Modal/Modal";
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

    const openRequest = async (rowIdx: string) => {
        // const request = data.filter((data) => data.id === Number(rowIdx));
        await setRequest({
            "id": 8,
            "client_full_name": "Izaak Secrett",
            "application_date": "21.11.2020",
            "company": "Linkbridge",
            "carrier_full_name": "Duff Courson",
            "mobile_number": "8836630804",
            "comments": "Disp fx of neck of unsp radius, init for clos fx",
            "ATI": 3858
        },);
        handleClick();
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
            {isOpen ? <Modal onClose={() => setIsOpen(false)} request={request}/> : null}
        </div>
    );
};

export default TableActions;