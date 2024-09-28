function Card(props) {
    return (
        <div className="card--everything">
            <div className="card--div">
                <img className="card--img" src={props.imageUrl}/>
                <div className="card--info">
                    <div className="card--loc">
                        <img className="card--loc-img" src="../public/Pin.png"/>
                        <p className="card--location">{props.location}</p>
                        <a href={props.googleMapsUrl} target="_blank" className="card--maps">View on Google Maps</a>
                    </div>
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card--date">{props.dateVisited}</p>
                    <p className="card-details">{props.description}</p>
                </div>
                
            </div>
            <hr/>
        </div>
    )
}
export default Card