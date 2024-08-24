import React from "react";
import { Link } from "react-router-dom";
import { appRoutes,} from "@/core/router";
import classes from "./navbar.component.module.css";

export const NavbarComponentMovement: React.FC = () => {

    return (
    <nav className={classes.navbar}>
        <ul className={classes.list}>
        <li
        >
            <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li
            className={classes.selected}
        >
            Movimientos
        </li>
        <li
            >
            <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
        
        </ul>
    </nav>
    );
};
