import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { deleteHero, getHeroById, Hero } from "../api/hero-requests";

export function HeroDetailsPage(){
    const navigation = useNavigate();
    const [isVisible,setVisible] = useState<boolean>(false);

    

    const idCheck = localStorage.getItem("id");
    useEffect(()=>{
    if(!idCheck){
      alert("You have to select a hero.")
      navigation("/")
    }});

    const{isLoading,isError,data}= useQuery("Hero",()=>getHeroById(Number(idCheck)),{
        onSuccess: data =>{
            setVisible(data.hasPower);
        }});
    if(isLoading){
        return <p>LOADING</p>
    }
    if(isError){
        return <p>OH NO THERE WAS A PROBLEM</p>
    }
    async function handleDeleteHeroAction(){
        
        const returnedResponse: boolean = await deleteHero(Number(idCheck))
        if(returnedResponse){
            alert("Hero has left the league. (Or died, but we try not to be morbid around these parts...)");
            navigation("/");
        }
        else{
            alert("Oh No! Something Went Wrong");
        }
    }

    return <>
        <h2>Hero Details Page</h2>

        <img src={data?.imgLink} alt="" />
        <h5>Alias: {data?.alias}</h5>
        <h5>Secret Identity: {data?.civName}</h5>
        <h5>Species: {data?.species}</h5>
        {isVisible ? <h5>Power: {data?.power}</h5> : <> </> }
        <button className="delete button" onClick={() => {
            const confirmBox = window.confirm("Do you really want to delete this Hero?")
            if (confirmBox === true) {
                handleDeleteHeroAction();
            }}}>Delete Hero
        </button>

    </>
}