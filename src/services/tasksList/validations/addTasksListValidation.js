const Joi = require('joi');
const { ApiError: { badRequest } } = require('../../../global/apiError');

const tasksListSchema = Joi.object({
  userId: Joi.string()
    .min(24)
    .required()
    .messages({
        'string.min': 'ID do usuário precisa ter pelo menos 4 caracteres.',
        'string.empty': 'ID do usuário não pode ser vazio.',
        'any.required': 'ID do usuário é obrigatório.',
    }),
  name: Joi.string()
    .min(6)
    .required()
    .messages({
        'string.min': 'Nome precisa ter pelo menos 6 caracteres.',
        'string.empty': 'Nome não pode ser vazio.',
        'any.required': 'Nome é obrigatório.',
    }),
  tasks: Joi.array()
    .required(),
  description: Joi.string()
    .min(5)
    .required()
    .messages({
        'string.min': 'Descrição precisa ter pelo menos 5 caracteres.',
        'string.empty': 'Descrição não pode ser vazio.',
        'any.required': 'Descrição é obrigatória.',
    }),
  status: Joi.string()
    .valid('In progress', 'Done')
    .required()
    .messages({
        'string.valid': 'Status disponíveis são "In progress" ou "Done".',
        'string.empty': 'Status não pode ser vazio.',
        'any.required': 'Status é obrigatório.',
    }),
  priority: Joi.object({
    urgent: Joi.boolean().required(),
    important: Joi.boolean().required(),
  })
    .required()
    .messages({
        'any.required': 'Prioridade é obrigatória.',
    }),
});

const addTasksListValidation = (task) => {
  const { error } = tasksListSchema.validate(task);
  if (error) badRequest(error.message);
};

module.exports = { addTasksListValidation };
