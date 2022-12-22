export default({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre del restautrante",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Descripcion corta",
      validation: (Rule) => Rule.max(250),
    },
    {
      name: "image",
      type: "image",
      title: "Imagen del restautrante",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitud del restautrante",
    },
    {
      name: "long",
      type: "number",
      title: "Longitud del restautrante",
    },
    {
      name: "address",
      type: "string",
      title: "Direccion del restautrante",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Ingrese una valoracion de (1-5 estrellas)",
      validation: (Rule) => 
        Rule.required()
          .min(1)
          .max(5)
          .error("Por favor ingrese un valor del 1 al 5"),
    },   
    {
      name: "type",
      type: "string",
      title: "Categoria del restaurante",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category"}],
    },
    {
      name: "dishes",
      type: "array",
      title: "Platos restaurante",
      of: [{ type: "category", to: [{ type: "dish" }] }],
    },
  ],
})
