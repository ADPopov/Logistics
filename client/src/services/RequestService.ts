import api from "../api/instance";
import { Request } from "../models/Request";

const getAll = () => {
  return api.get("/requests");
};

const getById = (id: string) => {
  return api.get(`/requests/${id}`);
};

const create = (data: Request) => {
  return api.post(`/requests`, data);
};

const update = (id: string, data: Request) => {
  return api.put(`/requests/${id}`, data);
};

const remove = (id: string) => {
  return api.delete(`/requests/${id}`);
};

const count = () => {
  return api.get(`/requests/count`);
};

const RequestsService = {
  getAll,
  getById,
  create,
  update,
  remove,
  count
};

export default RequestsService