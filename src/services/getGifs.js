export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ml7bBXkBxYjfm9V43nh3IN2BKUp6jnU9&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    console.log(gifs);
    return gifs;
};