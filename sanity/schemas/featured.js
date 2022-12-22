export default ({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre de las categorias destacadas",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Descripcion del plato",
      validation: (Rule) => Rule.max(250),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurantes",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
})