import React from 'react';
import './ListResults.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

interface ListResultsProps {
  results: any[];
}

const ListResults:React.FC<ListResultsProps> = (props: ListResultsProps) => {
  return (
    <ul className="List-Results">
      {props.results.map((result: any) => (
        <li key={result.objectID} className="List-Item">
          <div className="List-Item__score">
            <FontAwesomeIcon icon={faSortUp} />
            {result.points}
          </div>
          <div className="List-Item__infos">
            <a className="List-Item__link" href={result.url}>{result.title}</a>
            <div className="List-Item__author">by <span>{result.author}</span></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListResults;
