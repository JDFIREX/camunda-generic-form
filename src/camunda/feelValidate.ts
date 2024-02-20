import {evaluate} from "feelin";

export const isValidExpression = (values: Record<string, string>, expression?: string, processVariables?: Record<string, string>): boolean => {
    if(!expression) return false;

    if(processVariables) {
        const combinedValues = {
            ...(processVariables || {}),
            ...values
        };

        return evaluate(expression.slice(1), combinedValues) as boolean;
    }

    return evaluate(expression.slice(1), values) as boolean;
};
