import Joi from "joi";

const participantSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  status: Joi.string().required(),
  ticketId: Joi.number().integer().positive().required(),
});

export const participantUpdateSchema = participantSchema
  .fork(["firstName", "lastName", "email", "status", "ticketId"], (field) => field.optional())
  .min(1);

export default participantSchema;