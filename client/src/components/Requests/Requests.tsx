import React, {useState} from "react";
import {Request} from "../../models/Request";
import MOCK_DATA from "../../MOCK_DATA.json";
import {Column} from "react-table";
import Modal from "../common/Modal/Modal";
import Table from "../common/Table/Table";
import {Header, PageHeader, Wrapper} from "./Requests.styled";
import {ButtonWithIcon} from "../common/Button/ButtonWithIcon";
import { COLUMNS } from "./RequestsTableColumns/RequestTableColumns";



const Requests = () => {
    const data = React.useMemo<Request[]>(() => MOCK_DATA, []);
    const columns = React.useMemo(() => COLUMNS as Column<Request>[], []);
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
    }

    return (
        <Wrapper>
            <PageHeader>
                <Header>Заявки</Header>
                <div>
                    <ButtonWithIcon onClick={() => handleClick()} />
                </div>
            </PageHeader>
            <Table columns={columns} data={data}/>
            {isOpen ? <Modal onClose={() => setIsOpen(false)}/> : null}
        </Wrapper>
    );
};

export default Requests;