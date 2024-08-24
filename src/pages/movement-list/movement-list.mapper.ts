import {  AccountMovement, AccountVmMovements } from './movement-list.vm';
import {AccountApi, AccountApiMovements } from "./api"

export const mapAccountMovementsFromApiToVm = (
    accountMovements: AccountApiMovements[]
): AccountVmMovements[] => 
    accountMovements.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
    transaction: new Date(movement.transaction),  
    realTransaction: new Date(movement.realTransaction),  
    accountId: movement.accountId,
    }));


export const mapAccountFromApiToVm = (accountApi: AccountApi): AccountMovement => ({
        id: accountApi.id,
        iban: accountApi.iban,
        balance: accountApi.balance.toFixed(2), 
        name: accountApi.name,
});