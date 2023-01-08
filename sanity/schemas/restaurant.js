export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del Restaurante',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Descripcion del Restaurante',
      validation: (Rule) => Rule.max(250),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagen del Restaurante',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitud del Restaurante',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitud del Restaurante',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Direccion del Restaurante',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      type: 'number',
      title: 'Telefono del Restaurante',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Valoracion del restaurante de 1 a 5',
      validation: (Rule) => Rule.required().min(1).max(5).error('Value bt 1 and 5'),
    },
    {
      name: 'type',
      title: 'Categoria',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Platos',
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    }
  ],
}
