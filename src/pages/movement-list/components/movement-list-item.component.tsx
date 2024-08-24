import React from "react";
import {AccountVmMovements} from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
    movementItem: AccountVmMovements;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
    const { movementItem } = props;
    const formatCurrency = (value: number) => {
        return `${value} €`; 
    };

    const getAmountClass = (value: number) => {
        return value < 0 ? classes.negative : ""; 
    };
    return (
        <div  className={classes.row}>
            <span  className={classes.dataCell}>{movementItem.transaction.toLocaleDateString()}</span>
            <span  className={classes.dataCell}>{movementItem.realTransaction.toLocaleDateString()}</span>
            <span  className={classes.dataCell}>{movementItem.description}</span>
            <span className={`${classes.dataCell} ${classes.alignRight} ${getAmountClass(movementItem.amount)}`}>
                {formatCurrency(movementItem.amount)}
            </span>
            <span className={`${classes.dataCell} ${classes.alignRight} ${getAmountClass(movementItem.balance)}`}>
                {formatCurrency(movementItem.balance)}
            </span>
        </div>
    )
};