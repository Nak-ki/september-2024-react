import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Only characters min 1 max 20 '
    }),
    price: Joi.number().min(0).max(1_000_000).required().messages({
        'number.min':'min 0',
        'number.max':'max 1 000 000'
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min': 'min 1990 year',
        'number.max': 'max 2024 year'
    }),
})