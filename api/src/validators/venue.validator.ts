import Joi from "joi";

const venueSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  description: Joi.string().allow(""),
  capacity: Joi.number().required(),
  location: Joi.string().required(),
  image: Joi.string().required(),
});

export default venueSchema;