
import image from '../assets/news.jpg'
const NewsItem = ({title, description, src, url}) => {
  return (
   <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  {/* <img src= {src?src:image} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..."/> */}

  <img
        src={src || "/news.jpg"}       // fallback image
        // onError={(e) => { e.target.src = "/news.jpg"; }} // if API image fails
        style={{ height: "200px", width: "330px", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"It is information that has just happened."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem;
