import { useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { addHero, Hero } from "../api/hero-requests";
import "../simple-styles.css"

type HeroInputForm = {
    alias: string
    civName: string
    species: string
    hasPower: boolean
    power: string
    imgLink: string
}

export function AddHeroPage(){

    const[form, setForm] = useState<HeroInputForm>({alias:"", civName:"", species:"", hasPower:true, power:"", imgLink:""});
    const navigation = useNavigate();

    async function handleAddHeroAction(){
        const newHero: HeroInputForm = {
            alias: form.alias,
            civName: form.civName,
            species: form.species,
            hasPower: form.hasPower,
            power: form.power,
            imgLink: form.imgLink
        }

        
        const returnedHero: Hero = await addHero(newHero);
        alert("A new hero has joined the league!!!");
        navigation("/");
    }

    return <>
        <h2>Add Hero Page</h2>

        <fieldset>
            <legend>Add a Hero</legend>
            <div style={{float:"left", marginRight:"20px"}}>
                <label htmlFor="alias">Alias </label>
                <input type="text" id="alias" placeholder='AwesomeGal' onChange={e => setForm({...form, alias:e.target.value})} />
            </div>
            <div style={{float:"left", marginRight:"20px"}}>
                <label htmlFor="civName">Secret Identity </label>
                <input type="text" id="civName" placeholder='Ashley Galvin' onChange={e => setForm({...form,civName:e.target.value})}/>
            </div>
            <div style={{float:"left", marginRight:"20px"}}>
                <label htmlFor="species">Species </label>
                <input type="text" id="species" placeholder='New Gods' onChange={e => setForm({...form,species:e.target.value})}/>
            </div>
            <div style={{float:"left", marginRight:"20px"}}>
                <label htmlFor="hasPower">Power? </label>
                <input type="checkbox" id="hasPower" onChange={e => setForm({...form,hasPower:e.target.checked})}/>
            </div>
            <div style={{float:"left", marginRight:"20px"}}>
                <label htmlFor="power">Power </label>
                <input type="text" id="power" placeholder='Invisibility' onChange={e => setForm({...form,power:e.target.value})}/>
            </div>
            <div style={{float:"left", marginRight:"20px"}}>
                <label htmlFor="picture">Picture </label>
                <input type="text" id="picture" placeholder='http://' onChange={e => setForm({...form,imgLink:e.target.value})}/>
                
            </div>
            <div>
                <br /><br /><br /><button onClick={handleAddHeroAction}>Add Hero</button>
            </div>
        </fieldset>
    </>
}