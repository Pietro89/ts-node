import {db} from "@db"

export async function findUserById(id: string) {
    return await db.selectFrom('user')
        .where('id', '=', id)
        .selectAll()
        .executeTakeFirst()
}
