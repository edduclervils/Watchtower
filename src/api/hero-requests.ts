export type Hero = {
    id: number
    alias: string
    civName: string
    species: string
    hasPower: boolean
    power:string
    imgLink: string
}
export type HeroInput = {
    alias: string
    civName: string
    species: string
    hasPower: boolean
    imgLink: string
}

export type HeroList = {
    id: number
    alias: string
    imgLink: string

}

export async function getHeroesforList():Promise<HeroList[]> {
    const httpResponse = await fetch("http://127.0.0.1:8080/heroes");
    const responseBody = await httpResponse.json();
    const heroList: HeroList[] = responseBody;
    return heroList;
}

export async function getHeroById(heroId:number):Promise<Hero> {
    const httpResponse = await fetch("http://127.0.0.1:8080/heroes/"+heroId);
    const responseBody = await httpResponse.json();
    const hero: Hero = responseBody;
    return hero;
}

export async function addHero(hero:HeroInput):Promise<Hero> {
    const httpResponse = await fetch("http://127.0.0.1:8080/heroes", {
        method: "POST",
        body:JSON.stringify(hero),
        headers:{
            "Content-Type":"application/json"
        }
    });

    const newHero:Hero = await httpResponse.json();
    return newHero;   
}


export async function deleteHero(heroId:number):Promise<boolean> {
    const httpResponse = await fetch("http://127.0.0.1:8080/heroes/"+heroId, {
        method: "DELETE"
    });
    const returnedResponse:boolean = await httpResponse.json();
    return returnedResponse;   
}