import Joi from "joi";

export const CharactersSchema = Joi.object({
    name: Joi.string().required(),
    level: Joi.number().required(),
    transformations: Joi.number().required(),
    image: Joi.string().required()
})