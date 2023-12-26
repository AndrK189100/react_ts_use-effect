import { useEffect, useState } from 'react';
import './details.css'

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/%s.json';

export interface Info {
    id: number;
    name: string;
}

export interface FullInfo {
    id: number|null;
    name: string;
    avatar: string;
    city: string;
    company: string;
    position: string;
}

export default function Details({userInfo}:{userInfo: Info}) {

   const [fullInfo, setFullInfo] = useState<FullInfo>({id: null, name: '', avatar: '', city: '', company: '', position: ''});
   const [loading, setLoading] = useState<boolean>(true); 
       
    useEffect(() =>{
        setLoading(true);

        (async() =>{
            const response = await fetch(url.replace('%s', (userInfo.id).toString()))
            if (response.ok) {
                const info = await response.json();
                setFullInfo({id: info.id, 
                            name: info.name, 
                            avatar: info.avatar + '?id=' + userInfo.id,
                            city: info.details.city,
                            company: info.details.company,
                            position: info.details.position,
                        })

                console.log(info);
                setLoading(false);
            }
        })();
        
    },[userInfo.id]);

    if (loading) return (<div className='details'>...</div>);

    return ( 
        <div className='details'>
            <img src={fullInfo.avatar}></img>
            <div className='details-element'>Name: {fullInfo.name}</div>
            <div className='details-element'>City: {fullInfo.city}</div>
            <div className='details-element'>Company: {fullInfo.company}</div>
            <div className='details-element'>Position: {fullInfo.position}</div>
        </div>);
    
}