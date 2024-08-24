import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css";
import { CreateAccountFormComponent } from "./components";
import { Account } from "./account.vm";
import { saveAccount } from "./api/account.api";

export const AccountPage: React.FC = () => {
  const handleSave = async (account: Account) => {
    try {
      const savedAccount = await saveAccount(account);
      alert(`Cuenta guardada con éxito: ${JSON.stringify(savedAccount)}`);
    } catch (error) {
      alert("Error al guardar la cuenta.");
    }
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <div>
          <CreateAccountFormComponent account={null} onSave={handleSave} />
        </div>
      </div>
    </AppLayout>
  );
};
