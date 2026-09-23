import Joi from "joi";

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;       // AAAA-MM-JJ
const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/; // HH:mm

const eventSchema = Joi.object({
  artistId: Joi.number().integer().positive().required(),
  venueId: Joi.number().integer().positive().required(),
  date: Joi.string().pattern(DATE_REGEX).required(),
  startTime: Joi.string().pattern(TIME_REGEX).required(),
  endTime: Joi.string().pattern(TIME_REGEX).required(),
  status: Joi.string().valid("scheduled", "cancelled"),
});

export const eventUpdateSchema = eventSchema
  .fork(["artistId", "venueId", "date", "startTime", "endTime"], (field) => field.optional())
  .min(1);

export default eventSchema;