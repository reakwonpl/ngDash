import {Customer} from "../Shared/Customer";
export interface Order
{
    id: number;
    customer: Customer;
    total:number;
    placed: Date;
    fullfiled:Date;
    status:string;
}