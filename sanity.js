import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: '51zni2s4',
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run THIS in console to add exception for localhost 3000 CORS policy 
// sanity cors add http://localhost:3000
// sanity cors add http://localhost:3333
// sanity cors add http://localhost:19006
// sanity cors add https://davidcastagnetoa-stunning-goggles-p5wrp6jq9xc6wp9-19006.preview.app.github.dev
// sanity cors add https://davidcastagnetoa-stunning-goggles-p5wrp6jq9xc6wp9-3000.preview.app.github.dev
// sanity cors add https://davidcastagnetoa-stunning-goggles-p5wrp6jq9xc6wp9-3333.preview.app.github.dev

export default client;