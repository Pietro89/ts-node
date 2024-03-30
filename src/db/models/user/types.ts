import {Insertable, Selectable, Updateable} from "kysely";

export interface UserTable {
    id: string;
    first_name: string;
    last_name: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>
