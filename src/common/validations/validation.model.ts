import { TransferError } from "@/pages/transfer/transfer.vm";

export interface FieldValidationResult {
    succeeded: boolean;
    errorMessage?: string;
}

export interface FormValidationResult {
succeeded: boolean;
errors: TransferError;
}

