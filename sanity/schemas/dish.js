export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del plato',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Descripcion del plato',
      validation: (Rule) => Rule.max(250),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagen del plato',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio del plato',
    },
    
  ],
}