import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/ShaurmaBlock/ShaurmaBlock';
import Skeleton from '../components/ShaurmaBlock/Skeleton';
import ShaurmaBlock from '../components/ShaurmaBlock/ShaurmaBlock';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://67921c37cf994cc68048bb5d.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Вся шаурма</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ShaurmaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
