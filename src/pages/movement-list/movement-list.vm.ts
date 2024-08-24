export interface AccountVmMovements {
        id: string;
        description: string;
        amount: number;
        balance: number;
        transaction: Date;
        realTransaction: Date;
        accountId: string;
}

export interface AccountMovement {
        id: string;
        iban: string;
        balance: string;
        name: string;
}

