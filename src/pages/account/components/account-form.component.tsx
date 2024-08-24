import React from "react";
import { Account, createEmptyAccountVm } from "../account.vm";

interface Props {
    account: Account | null;
    onSave: (accountInfo: Account) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
    const { onSave } = props;
    const [account, setAccount] = React.useState<Account>(createEmptyAccountVm());
    const [error, setError] = React.useState<string>("");

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAccount({
        ...account,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!account.type || !account.name) {
        setError("Debe seleccionar un tipo de cuenta y proporcionar un alias.");
        return;
    }

    setError("");
    onSave(account);
    };

    return (
    <>
        <div>
        <form onSubmit={handleSubmit}>
            <label>Tipo de cuenta:</label>
            <select name="type" value={account.type} onChange={handleFieldChange}>
                <option value="">Seleccionar</option>
                <option value="Cuenta corriente">Cuenta corriente</option>
                <option value="Ahorro">Ahorro</option>
            </select>

            <label>Alias:</label>
            <input
            name="name"
            value={account.name}
            onChange={handleFieldChange}
            placeholder="Introduce un alias"
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Guardar</button>
        </form>
        </div>
    </>
    );
};
