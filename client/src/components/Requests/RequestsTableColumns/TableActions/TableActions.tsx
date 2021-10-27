import React, { FC, useState } from "react";
import { Flex, Icon } from "./TableActions.styled";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import Modal from "../../../common/Modal/Modal";
import { Request } from "../../../../models/Request";
import RequestsService from "../../../../services/RequestService";
import { useAction } from "../../../../hooks/useAction";

interface TableActionsProps {
  rowIdx: string;
}

export const TableActions: FC<TableActionsProps> = ({ rowIdx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [request, setRequest] = useState<Request | null>();

  const { removeRequest } = useAction();

  const handleClick = () => {
    setIsOpen(true);
  };

  const openRequest = async (rowIdx: string) => {
    const { data } = await RequestsService.getById(rowIdx);
    setRequest(data);
    handleClick();
  };

  return (
    <Flex>
      <Icon onClick={() => openRequest(rowIdx)}>
        <AiOutlineEdit size={20} />
      </Icon>
      <Icon onClick={() => removeRequest(rowIdx)}>
        <BiTrash size={20} />
      </Icon>
      {isOpen ? (
        <Modal
          onClose={() => setIsOpen(false)}
          request={request}
          title={"Заявка"}
        />
      ) : null}
    </Flex>
  );
};

export default TableActions;