const NewsCard = ({ newsItem }) => {
  return (
    <div className="card mb-3">
      {newsItem.img && (<img src={newsItem.img} className="card-img-top" alt={newsItem.title} />)}
      <div className="card-body">
        <div className="d-flex g-3">
          <span class="badge rounded-pill bg-dark">{newsItem.type}</span>
          <span class="badge rounded-pill bg-dark">{newsItem.source}</span>
          {newsItem.authors.map((author) => (
              <span class="badge rounded-pill bg-dark">{author.name}</span>
          ))}
        </div>
        <h5 className="card-title">{newsItem.title}</h5>
        <p className="card-text">{newsItem.abstract}</p>
        <p className="card-text">{newsItem.details}</p>
        <a href={newsItem.web_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Soruce
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
