// @ts-ignore
import * as TYPES from './Request.types';

export const addRequestParam = (paramName: string, value: any) => {
    return {
        type: TYPES.ADD_REQUEST_PARAM,
        payload: {
            [paramName]: value

        }
    }
}