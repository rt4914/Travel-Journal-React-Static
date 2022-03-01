import React from 'react'
import locationIcon from '../images/map-icon.svg'

export default function Location(props){
    return (
        <div className="location">
            <section>
                <img className="location--image" src={`${props.item.imageUrl}`} />
                <div className="location--content">
                    <span className="location--geo-details">
                        <img className="location--map-icon" src={locationIcon} /> 
                        <p className="location--location">{props.item.location}</p>
                        {props.item.googleMapsUrl && <p className="location--google-maps" onClick={() => openInNewTab(props.item.googleMapsUrl)}>View on Google Maps</p>}
                    </span>
                    <h2 className="location--name">{props.item.title}</h2>
                    <p className="location--dates">{`${props.item.startDate} - ${props.item.endDate}`}</p>
                    <p className="location--description">{props.item.description}</p>
                </div>
            </section>
            <hr/>
        </div>
    )
}

const openInNewTab = (url) =>{
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
