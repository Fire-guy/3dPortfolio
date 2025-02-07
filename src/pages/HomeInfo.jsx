import React from 'react'
import {arrow } from '../assets/icons'
import {Link } from 'react-router-dom'

const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent={
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am <span className='font-semibold'>Shreyansh</span>👋<br/>A software Engineer from India.</h1>
    ),
    2:(
        <InfoBox text="Worked with many companies and picked up skills along the way." link="/about" btnText="Learn more"/>
    ),
    3:(
        <InfoBox text="Led multiple project to success over the years." link="/projects" btnText="Visit my portfolio"/>

    ),
    4:(
        <InfoBox text="Need for a project intern or software developer?" link="/profile" btnText="Here'my profile"/>

    )

}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo