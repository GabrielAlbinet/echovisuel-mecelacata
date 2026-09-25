import Joi from "joi";

const artistSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
});

export default artistSchema;