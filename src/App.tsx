import React, { useState } from 'react';
import './App.css';
import axios, { AxiosResponse, AxiosError } from 'axios';

import Input from './components/Input';
import Button from './components/Button';
import Loading from './components/Loading';
import ListResults from './components/ListResults';

const App:React.FC = () => {
  const [resultsHits, setResultsHits] = useState();
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [nbPages, setNbPages] = useState(0);
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const newQuery:string = e.target.value;
    const newPage = 0;
    setLoading(true);
    setQuery(newQuery);
    setPage(newPage);
    setResultsHits([]);

    fetchResults(newQuery, newPage);
  };

  const handleClickMore = ():void => {
    fetchResults(query, page + 1);
    setPage(page + 1);
  };

  const fetchResults = (query: string, page: number) => {
    axios.get(`//hn.algolia.com/api/v1/search?query=${query}&tags=story&page=${page}`)
      .then((response: AxiosResponse) => {
        if (page === 0) {
          setResultsHits(response.data.hits);
          setError(false);
          setTotal(response.data.nbHits);
          setNbPages(response.data.nbPages);
          setLoading(false);
        } else {
          setResultsHits([...resultsHits, ...response.data.hits]);
        }
      })
      .catch((error: AxiosError) => {
        setError(true);
        setTotal(0);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <h2>Search for Hacker News</h2>

      <Input handleChange={handleChange} />

      <div className="Content">

        {resultsHits && (
          <>
            <p className="Results">{total} result{total > 1 ? 's' : ''}</p>

            {loading ? <Loading /> : (
              <>
                <ListResults results={resultsHits} />

                {total > 0 && nbPages > 1 && page < nbPages && (
                  <div className="See-More">
                    <Button handleClick={handleClickMore} />
                  </div>
                )}
              </>
            )}

            {error && <p>An error has occurred</p>}

          </>
        )}
      </div>

    </div>
  );
}

export default App;
