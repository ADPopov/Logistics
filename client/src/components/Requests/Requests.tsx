import React, { useState } from "react";
import { Column } from "react-table";
import { Request } from "../../models/Request";
import Modal from "../common/Modal/Modal";
import Table from "../common/Table/Table";
import { Flex, Header, PageHeader, Wrapper } from "./Requests.styled";
import { ButtonWithIcon } from "../common/Button/ButtonWithIcon";
import { COLUMNS } from "./RequestsTableColumns/RequestTableColumns";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useAction";
import ToggleButton from "../common/ToggleButton/ToggleButton";
import { IoMdAddCircleOutline } from "react-icons/io";

const Requests = () => {
  const columns = React.useMemo(() => COLUMNS as Column<Request>[], []);
  const [isOpen, setIsOpen] = useState(false);

  const { requests } = useTypeSelector((state) => state.RequestReducer);
  const { totalCount } = useTypeSelector((state) => state.RequestReducer);
  const { isAdmin } = useTypeSelector((state) => state.AuthReducer);
  const { setRole } = useAction();

  const handleClick = () => setIsOpen(true);

  const data = [...requests].reverse();

  const ToggleHandler = (isAdmin: boolean) => {
    setRole(isAdmin);
  };

  return (
    <Wrapper>
      <PageHeader>
        <Flex>
          <Header>Заявки</Header>
          Общее количество заявок: {totalCount}
        </Flex>
        <Flex>
          {isAdmin ? (
            <ButtonWithIcon
              icon={<IoMdAddCircleOutline size={25} />}
              onClick={() => handleClick()}
            >
              Добавить заявку
            </ButtonWithIcon>
          ) : null}
          Admin: <ToggleButton onClick={(state) => ToggleHandler(state)} />
        </Flex>
      </PageHeader>
      <Table columns={columns} data={data} isAdmin={isAdmin} />
      {isOpen ? (
        <Modal onClose={() => setIsOpen(false)} title={"Заявка"} />
      ) : null}
    </Wrapper>
  );
};

export default Requests;
