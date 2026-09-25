import Joi from "joi";

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

const festivalSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  mainLocation: Joi.string().required(),
  poster: Joi.string().uri().required(),
  startDate: Joi.string().pattern(DATE_REGEX).required(),
  endDate: Joi.string().pattern(DATE_REGEX).required(),
});

export const festivalUpdateSchema = festivalSchema
  .fork(["name", "description", "mainLocation", "poster", "startDate", "endDate"], (field) => field.optional())
  .min(1);

export default festivalSchema;