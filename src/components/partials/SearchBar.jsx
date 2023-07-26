import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OptionsAsync, SearchAsync } from '../../store/news-slice';
import Select from 'react-select';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [keywords, setKeywords] = useState('');
  const [types, setTypes] = useState([]);
  const [sources, setSources] = useState([]);
  const [authors, setAuthors] = useState([]);

  const typesList = useSelector((state) => state.news.options.types || []);
  const sourcesList = useSelector((state) => state.news.options.sources || []);
  const authorsList = useSelector((state) => state.news.options.authors || []);

  const handleSearch = () => {
    dispatch(SearchAsync({
      page: 1,
      keywords: keywords,
      types: types.map((option) => option.value),
      sources: sources.map((option) => option.value),
      authors: authors.map((option) => option.value),
    }));
  };

  useEffect(() => {
    dispatch(OptionsAsync());
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="form-group row align-items-center">
          <div className="col-md-3">
            <label htmlFor="searchInput" className="col-form-label">
              Search by keywords:
            </label>
            <input
              type="text"
              id="searchInput"
              className="form-control"
              placeholder="Search..."
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="types" className="col-form-label">
              Types:
            </label>
            <Select
              id="types"
              isMulti
              options={typesList.map((obj) => ({ value: obj.type, label: obj.type }))}
              placeholder="Select Type"
              onChange={(selectedOptions) => setTypes(selectedOptions)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="soruces" className="col-form-label">
              Sources:
            </label>
            <Select
              id="soruces"
              isMulti
              options={sourcesList.map((obj) => ({ value: obj.source, label: obj.source}))}
              placeholder="Select Source"
              onChange={(selectedOptions) => setSources(selectedOptions)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="authors" className="col-form-label">
              Authors:
            </label>
            <Select
              id="authors"
              isMulti
              options={authorsList.map((author) => ({ value: author.id, label: author.name }))}
              placeholder="Select Author"
              onChange={(selectedOptions) => setAuthors(selectedOptions)}
            />
          </div>
          <div className="col-md-12 mt-3 text-center">
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
