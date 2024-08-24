import React from "react";
import { useParams } from "react-router-dom";
import { AccountMovement, AccountVmMovements } from "./movement-list.vm";
import { AppLayout } from "@/layouts";
import { MovementListTableComponent } from "./components";
import classes from "./movement-list.page.module.css";
import { getAccountMovement, getMovements } from "./api/movement-list.api";
import { mapAccountFromApiToVm, mapAccountMovementsFromApiToVm } from "./movement-list.mapper";


export const MovementListPage: React.FC = () => {
  const { id: accountId } = useParams<{ id: string }>();  
  const [movementList, setMovementList] = React.useState<AccountVmMovements[]>([]);
  const [account, setAccount] = React.useState<AccountMovement>();

  React.useEffect(() => {
    if (accountId) {
      getAccountMovement(accountId).then((result) => {
        setAccount(mapAccountFromApiToVm(result)); 
      });
    }
  }, [accountId]);



  React.useEffect(() => {
    if (accountId) {
      getMovements(accountId).then((result) => setMovementList(mapAccountMovementsFromApiToVm(result)));
    }
  }, [accountId]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Movimientos de la cuenta</h1>
          <h2>Saldo: {`${account?.balance} €`}</h2>
        </div>
        <div className={classes.h2Container}>
          <h2>Alias: { `${account?.name}`}</h2>
          <h2>Cuenta: { `${account?.iban}`}</h2>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
