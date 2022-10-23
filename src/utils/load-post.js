export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");

  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    /**
     * Estamos percorrendo o array postsJson com o metodo map, para cada posts estamos adicionando uma url do objeto photosJson que consumimos da API.
     * Isso nos retornara o novo array postsAndPhotos contendo os posts e suas respectivas fotos
     */
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
