const Destinations = (props) => {
  return (
    <div className="destination flex">
      <img src={props.img} alt={props.title}></img>
      <div className="container">
        <div className="container flex">
          <i className="fa-solid fa-location-dot"></i>
          <p className="destination-country">{props.location}</p>
          <a className="destination-map" href={props.maps}>
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
// id: 1,
// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description:
//   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
