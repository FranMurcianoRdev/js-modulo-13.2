import Axios from "axios";
import { AccountApi, AccountApiMovements } from "./movement-list.api-model";


const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountMovement = (accountId: string): Promise<AccountApi> => {
    return Axios.get<AccountApi[]>(url, { params: { accountId } })
        .then(({ data }) => {
        const account = data.find((account) => account.id === accountId);
        if (!account) {
            throw new Error(`Account with id ${accountId} not found`);
        }
        return account;
    });
};



export const getMovements =(accountId: string): Promise<AccountApiMovements[]> =>{
    return Axios.get<AccountApiMovements[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data);
};