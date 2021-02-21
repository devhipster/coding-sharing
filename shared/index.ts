export interface User{
    uuid: string;
    name: string;
    age: number;
    admin: boolean
}

export function createId(id){
    return id;
}