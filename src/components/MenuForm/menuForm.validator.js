import joi from 'joi';

const menuValidatorSchema = joi.object({
  title: joi.string().min(3).max(255).required().label('Title'),
  description: joi.string().min(3).max(255).required().label('Description'),
  thumbnail: joi.string().required().label('Thumbnail'),
  tags: joi.string().min(3).max(255).required().label('Tags'),
  foodItems: joi
    .array()
    .items(joi.string().min(24).max(24))
    .required()
    .label('Food Items'),
});

export default menuValidatorSchema;
