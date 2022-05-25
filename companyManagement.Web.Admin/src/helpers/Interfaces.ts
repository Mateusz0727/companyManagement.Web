export interface Statement
{
    code?: number;
    message?: string;
}

export interface Resource<T> extends Statement
{
    result: T;
    meta: any;
}

export interface Pagination<T> extends Statement
{
    totalRows: number;
    items: T[];
    meta: any;
}