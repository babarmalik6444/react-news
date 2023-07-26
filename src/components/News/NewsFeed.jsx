import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import Pagination from '../partials/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { SearchAsync } from '../../store/news-slice';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.data);
  const loading = useSelector((state) => state.news.loading);
  const totalPages = useSelector((state) => state.news.data?.last_page || 1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(SearchAsync({
      page: 1
    }));
  }, [dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(SearchAsync({
      page: page
    }));
  };

  return (
    <div className="container mt-3">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : newsData.length === 0 || newsData?.data.length === 0 ? (
        <div className="text-center">No result found</div>
      ) : (
        <>
          <div className="row">
            {newsData.data.map((newsItem) => (
              <div className="col-md-8 offset-md-2" key={newsItem.id}>
                <NewsCard newsItem={newsItem} />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </>
      )}
    </div>
  );
};

export default NewsFeed;
