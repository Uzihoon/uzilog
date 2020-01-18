import axios from "axios";

const url = '/api/'

export const getList = () => axios.get(`${url}uzilog`);