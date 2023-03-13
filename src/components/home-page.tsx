import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getHeroesforList, HeroList } from "../api/hero-requests";

export function HomePage(){
    const [heroes, setHeroes] = useState<HeroList[]>([]);

    useEffect(()=>{
        (async ()=>{
            const retrievedHeroes = await getHeroesforList();
            setHeroes(retrievedHeroes);
        })()
    },[]);

    return <>
    <h2>Welcome to the WatchTower Database</h2>
    <ol>
        {heroes.map(h =><li key={h.id}><Link onClick={()=>localStorage.setItem("id",String(h.id))} to={`/details/${h.id}`}>{h.alias}</Link></li>)}
    </ol>
    </>
}