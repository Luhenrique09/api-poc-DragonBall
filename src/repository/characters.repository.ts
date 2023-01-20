import { QueryResult } from "pg";
import { connectionDB } from "../database/db.js";
import { Characters, CharactersEntity } from "../protocols/body.js";

export async function findAllRep() : Promise<QueryResult<CharactersEntity>> {
    return connectionDB.query(
        "SELECT * FROM characters;"
    );
}

export async function createRep({name, level, transformations, image}: Characters) : Promise<QueryResult<CharactersEntity>> {
   return connectionDB.query(
        "INSERT INTO characters (name, level, transformations, image) VALUES ($1, $2, $3, $4);",
        [name, level, transformations, image]
    );
} 

export async function findByIdRep(id:number) : Promise<QueryResult<CharactersEntity>>  {
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