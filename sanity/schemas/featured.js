export default {
  name: 'featured',
  title: 'featured',
  type: 'document',
  title: 'Featured menu Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre de las categorias destacadas',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Descripcion de las categorias destacadas',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference',to: [{type: 'restaurant'}] }],
    },
    
  ],
}
