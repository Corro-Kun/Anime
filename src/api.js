const Api = "https://api.jikan.moe/v4/anime";

export async function GetData(){
    const result = await fetch(Api);
    const {data} = await result.json();
    return data;
}

export async function GetAnime(ID){
    const result = await fetch(Api + "/" + ID);
    const {data} = await result.json();
    return data;
}

export async function PassPage(page){
    const result = await fetch(Api + "?page=" + page);
    const {data} = await result.json();
    return data;
}