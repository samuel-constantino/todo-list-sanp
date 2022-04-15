const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/apiError');

const registerSchema = Joi.object({
    name: Joi.string()
        .min(4)
        .required()
        .messages({
            'string.min': 'Nome precisa ter pelo menos 4 caracteres.',
            'string.empty': 'Nome não pode ser vazio.',
            'any.required': 'Nome é obrigatório.',
        }),
    password: Joi.string()
        .min(4)
        .required()
        .messages({
            'string.min': 'Senha precisa ter pelo menos 4 caracteres.',
            'string.empty': 'Senha não pode ser vazia.',
            'any.required': 'Senha é obrigatória.',
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Email precisa está no formato de email.',
            'string.empty': 'Email não pode ser vazio.',
            'any.required': 'Email é obrigatório.',
        }),
});

const registerValidation = (user) => {
    const { error } = registerSchema.validate(user);
    if (error) badRequest(error.message);
};

module.exports = { registerValidation };
