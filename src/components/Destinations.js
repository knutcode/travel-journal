const Destinations = (props) => {
	return (
		<div className="destination flex">
			<img
				src={props.img}
				alt={props.title}
			></img>
			<div className="text-container">
				<div className="container flex">
					<i className="fa-solid fa-location-dot"></i>
					<p className="destination-country">{props.location}</p>
					<a
						className="destination-map"
						href={props.maps}
					>
						View on Google Maps
					</a>
				</div>
				<h2 className="destination-location">{props.title}</h2>
				<p className="destination-date">
					{props.startDate} - {props.endDate}
				</p>
				<p className="destination-paragraph">{props.desc}</p>
			</div>
		</div>
	);
};

export default Destinations;
