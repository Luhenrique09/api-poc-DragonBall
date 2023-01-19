import { QueryResult } from "pg";
import { connectionDB } from "../database/db.js";
import { Characters } from "../protocols/body.js";

export async function findAllRep() : Promise<QueryResult<Characters>> {
    return connectionDB.query(
        "SELECT * FROM characters;"
    );
}

export async function createRep({name, level, transformations}: Characters) : Promise<QueryResult> {
   return connectionDB.query(
        "INSERT INTO characters (name, level, transformations) VALUES ($1, $2, $3);",
        [name, level, transformations]
    );
} 

export async function findByIdRep(id:number) : Promise<QueryResult<Characters>>  {
    return connectionDB.query(
        "SELECT * FROM characters WHERE id=$1;",
        [id]
    );
}

export async function updateRep({name, level, transformations}: Characters, id:number) : Promise<QueryResult> {
    return connectionDB.query(
        "UPDATE characters SET name=$1, level=$2, transformations=$3 WHERE id=$4;",
        [name, level, transformations, id]
    );
}


export async function removeRep(id:number) : Promise<QueryResult> {
    return connectionDB.query(
        "DELETE FROM characters WHERE id=$1;",
        [id]
    );
}