import { Request, Response } from "express";
import { Characters } from "../protocols/body.js";
import { createRep, findAllRep, findByIdRep, removeRep, updateRep } from "../repository/characters.repository.js";

export async function create(req: Request, res: Response) {
    const characters = req.body as Characters;

    try {
        await createRep(characters);

        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findAll(req: Request, res: Response) {
    try {
        const result = await findAllRep();
        
        res.send(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findById(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
        const { rows } = await findByIdRep(Number(id))
        if (rows.length === 0) {
            return res.send("Id não existe!")

        }
        res.send(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


export async function update(req: Request, res: Response) {
    const characters = req.body as Characters;
    const  {id}  = req.params;
    
    try {
        await updateRep(characters, Number(id));

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function remove(req: Request, res: Response) {
    const { id } = req.params;

    try {
        await removeRep(Number(id))

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
