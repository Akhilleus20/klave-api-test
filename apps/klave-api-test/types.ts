import { JSON } from '@klave/sdk';

@serializable
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

// @ts-ignore
@serializable
export class DataResult {
    success!: boolean;
    data!: string;
}