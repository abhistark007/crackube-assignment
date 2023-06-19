import React, { useEffect, useState } from 'react'
import './MainContent.css';
import TagButton from './TagButton';
import VideoCard from './VideoCard';
import listOfVideos from '../data';




function MainContent() {


    const [allVideos,setAllVideos]=useState(null);
    const [all,setAll]=useState(false);
    const [technology,setTechnology]=useState(false);
    const [lifestyle,setLifestyle]=useState(false);
    const [education,setEducation]=useState(false);
    const [healthCare,setHealthCare]=useState(false);
    const [sport,setSport]=useState(false);
    const [food,setFood]=useState(false);




    useEffect(()=>{
        setAllVideos(listOfVideos);
        setAll(true);
    },[])

    function filterVideosByTag(tag="ALL") {
        if(tag==="ALL"){
            setAllVideos(listOfVideos);
            return;
        }
        const filteredVideos = listOfVideos.filter(video => video.tag === tag);
        setAllVideos(filteredVideos);
    }


    const handleAll=()=>{
        filterVideosByTag();
        setAll(true);
        setTechnology(false);
        setEducation(false);
        setFood(false);
        setHealthCare(false);
        setLifestyle(false);
        setSport(false);
    }
    const handleTech=()=>{
        filterVideosByTag("TECHNOLOGY");
        setTechnology(true);
        setAll(false);
        setEducation(false);
        setFood(false);
        setHealthCare(false);
        setLifestyle(false);
        setSport(false);
    }
    const handleEdu=()=>{
        filterVideosByTag("EDUCATION");
        setEducation(true);
        setTechnology(false);
        setAll(false);
        setFood(false);
        setHealthCare(false);
        setLifestyle(false);
        setSport(false);
    }
    const handleLife=()=>{
        filterVideosByTag("LIFESTYLE");
        setLifestyle(true);
        setEducation(false);
        setTechnology(false);
        setAll(false);
        setFood(false);
        setHealthCare(false);
        setSport(false);
    }
    const handleHealth=()=>{
        filterVideosByTag("HEALTHCARE");
        setHealthCare(true);
        setLifestyle(false);
        setEducation(false);
        setTechnology(false);
        setAll(false);
        setFood(false);
        setSport(false);
    }
    const handleSport=()=>{
        filterVideosByTag("SPORT");
        setSport(true);
        setHealthCare(false);
        setLifestyle(false);
        setEducation(false);
        setTechnology(false);
        setAll(false);
        setFood(false);
    }

    const handleFood=()=>{
        filterVideosByTag("FOOD");
        setFood(true);
        setSport(false);
        setHealthCare(false);
        setLifestyle(false);
        setEducation(false);
        setTechnology(false);
        setAll(false);
    }


    return (
    <div className='maincontent'>
        <div className="maincontent__tags">
            <div onClick={handleAll}><TagButton txt={"All"} selected={all} /></div>
            <div onClick={handleTech}><TagButton txt={"Technology"} selected={technology}/></div>
            <div onClick={handleEdu}><TagButton txt={"Education"} selected={education}/></div>
            <div onClick={handleLife}><TagButton txt={"Lifestyle"} selected={lifestyle}/></div>
            <div onClick={handleHealth}><TagButton txt={"Healthcare"} selected={healthCare}/></div>
            <div onClick={handleSport}><TagButton txt={"Sport"} selected={sport}/></div>
            <div onClick={handleFood}><TagButton txt={"Food"} selected={food}/></div>
        </div>
        <div className="maincontent__view__wrapper">
        <div className="maincontent__view">
            {
                allVideos===null?<p style={{color:"white"}}>Loading</p>
                :(<>
                    {
                        allVideos.map((video)=>{
                            return <VideoCard tag={video.tag}
                            timestamp={video.timestamp}
                            title={video.title}
                            description={video.description}
                            thumbnail={video.thumbnail}
                            />
                        })
                    }
                </>)
            }
        </div>
        </div>

    </div>
  )
}

export default MainContent