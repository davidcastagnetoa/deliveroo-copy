export default ({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Categoria",
      validation: (Rule) => Rule.required()
    }
    ,
    {
      name: "image",
      type: "image",
      title: "Imagen de la Categoria",
    }
  ],
})
