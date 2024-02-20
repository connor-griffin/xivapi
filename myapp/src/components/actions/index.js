import {React,  useEffect, useState,} from 'react';
import './index.css';
const Action = ({data}) => {
    const [style, setStyle] = useState({display: 'none'});
        const createUrl = () => {
            return (
                'https://xivapi.com' + data.Icon
            )
        }
    return (
        <div className='container2'>
         <p  onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}>{data && data.Name}</p>
                    <p>{data.ClassJob && data.ClassJob.Abbreviation}</p>
                        <img src={createUrl()}></img>
                        <p>Type: {data.ActionCategory.Name}</p>
         <p style={style}>{data.Description}</p>
        </div>
    );
};

export default Action;