interface placestuff {
    title: string;
    area: string;
    city: string;
    MainImage: string;
    Desc: string;
    location: string;
    reason: string;
    IntroTitle: string;
}

function FavouritePlace(place: placestuff){
    let {title, area, city, MainImage, location, reason, IntroTitle, Desc} = place;
    return (
        <div className="favourite-places-pictures">
            <h2>{IntroTitle}</h2>
            <img>src = {MainImage} alt = {Desc}</img>
            <h2>{title.toUpperCase()}</h2>
            <h3>{area}, {city}, {<a href = {location}>here!</a>}</h3>
            <p>
                <i>{reason}</i>
            </p>
        </div>
    )
}


export default FavouritePlace;