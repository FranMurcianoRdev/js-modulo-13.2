import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components/account-list-table.component";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { appRoutes } from "@/core/router";
import { useNavigate } from 'react-router-dom';

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const navigate = useNavigate(); 

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const handleButtonClick = () => {
    navigate(appRoutes.createAccount);
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis cuentas</h1>
          <button onClick={handleButtonClick} className={classes.button}>
            AGREGAR NUEVA CUENTA
          </button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};