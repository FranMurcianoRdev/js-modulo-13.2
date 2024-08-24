import { buildValidationFailResult, buildValidationSucceededResult, FieldValidationResult, INVALID_AMOUNT_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_IBAN_MESSAGE, INVALID_REAL_DATE_TRANSFER_MESSAGE, isDateAfterToday, isEMailWellFormed, isPositiveNumber, isStringValueInformed, isValidIban, isValueNotNullOrUndefined, REQUIRED_FIELD_MESSAGE } from "@/common/validations";


export const validateIBANField = (value: string) : FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        {
            return buildValidationFailResult(REQUIRED_FIELD_MESSAGE);
        };
    }
    if (!isValidIban(value)) {
        {
            return buildValidationFailResult(INVALID_IBAN_MESSAGE);
        };
    }

    return buildValidationSucceededResult();
}; 

export const validateAccountIdField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildValidationFailResult(REQUIRED_FIELD_MESSAGE);
        }

    return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildValidationFailResult(REQUIRED_FIELD_MESSAGE);
    }

    return buildValidationSucceededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
    if (!isPositiveNumber(value)) {
        return buildValidationFailResult(INVALID_AMOUNT_MESSAGE);
    }

    return buildValidationSucceededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
    if (!isStringValueInformed(value)) {
        return buildValidationFailResult(REQUIRED_FIELD_MESSAGE);
    }

    return buildValidationSucceededResult();
};

export const validateNotesField = (_: string): FieldValidationResult =>
    buildValidationSucceededResult();

export const validateRealDateTransferField = (
    value?: string
    ): FieldValidationResult => {
    
        if (!isValueNotNullOrUndefined(value)) {
            return buildValidationSucceededResult();
        }
    
        if (value && !isDateAfterToday(value)) {
            return buildValidationFailResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
            }
    
        return buildValidationSucceededResult();
};

export const validateEmailField = (value?: string): FieldValidationResult => {
    if (!isValueNotNullOrUndefined(value)) {
        return buildValidationSucceededResult();
    }
    
    if (value && !isEMailWellFormed(value)) {
        return buildValidationFailResult(INVALID_EMAIL_MESSAGE);
    }
    
    return buildValidationSucceededResult();
};
