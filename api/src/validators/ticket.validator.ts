import Joi from "joi";

const ticketSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  condition: Joi.string().required(),
  available: Joi.boolean().required(),
});

export default ticketSchema;