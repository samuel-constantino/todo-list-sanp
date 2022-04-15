const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/apiError');

const loginShema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Email precisa está no formato de email.',
            'string.empty': 'Email não pode ser vazio.',
            'any.required': 'Email é obrigatório.',
        }),
    password: Joi.string()
        .min(4)
        .required()
        .messages({
            'string.min': 'Senha precisa ter pelo menos 4 caracteres.',
            'string.empty': 'Senha não pode ser vazia.',
            'any.required': 'Senha é obrigatória.',
        }),
});

const loginValidation = (user) => {
    const { error } = loginShema.validate(user);
    if (error) badRequest(error.message);
};

module.exports = { loginValidation };
