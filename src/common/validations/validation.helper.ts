import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validation.model";


export const buildValidationFailResult = (errorMessage: string): FieldValidationResult => ({
    succeeded: false,
    errorMessage
});

export const buildValidationSucceededResult = () => ({
    succeeded: true,
});


export const buildRequiredFieldValidationFailedResponse = () =>
    buildValidationFailResult(REQUIRED_FIELD_MESSAGE);