const Api = "https://api.jikan.moe/v4/anime";

export async function GetData(){
    const result = await fetch(Api);
    const {data} = await result.json();
    return data;
}