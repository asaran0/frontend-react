import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/questions';
import Category from './Category';
import Counter from '../components/Counter';
export default function Home() {
  return (
    <div>
      <h2 className="pageTitle">Categories</h2>
      {/* <Category /> */}
      <Link to="/categories">Go to Categories Page</Link>
      <Counter />
      {/* <div className="grid">
        <ul>
        {categories.map((category) => (
          <li>
            <h3>{category.name}</h3>
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="card"
          >
            
            <p>{category.count} questions</p>
          </Link>
          </li>
        ))}
        </ul>
      </div> */}

    </div>
  );
}