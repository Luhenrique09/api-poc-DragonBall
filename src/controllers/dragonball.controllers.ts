import { connectionDB } from "../database/db.js";
import { Request, Response } from "express";

export async function create (req :Request, res: Response) {
    const characters = req.body;

    try {
        await connectionDB.query(
            "INSERT INTO characters (name, level, transformations) VALUES ($1, $2, $3);",
            [characters.name, characters.level, characters.transformations]
        );

        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findAll(req :Request, res: Response) {
    try {
        const {rows} = await connectionDB.query(
            "SELECT * FROM characters;"
        );

        res.send(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findById(req :Request, res: Response) {
    const {id} = req.params;

    try {
        const {rows} = await connectionDB.query(
            "SELECT * FROM characters WHERE id=$1;",
            [id]
        );

        res.send(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


export async function update(req :Request, res: Response) {
    const characters = req.body;
    const {id} = req.params;
    
    try{
        await connectionDB.query(
            "UPDATE characters SET name=$1, level=$2, transformations=$3 WHERE id=$4;",
            [characters.name, characters.level, characters.transformations, id]
        );

        res.sendStatus(200);
    }catch (error) {
        res.status(500).send(error.message);
    }
}

export async function remove(req :Request, res: Response) {
    const {id} = req.params;
    
    try{
        await connectionDB.query(
            "DELETE FROM characters WHERE id=$1;",
            [id]
        );

        res.sendStatus(200);
    }catch (error) {
        res.status(500).send(error.message);
    }
}
