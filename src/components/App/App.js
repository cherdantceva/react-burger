import React, { useEffect } from "react";
import AppHeader from '../AppHeader/AppHeader'
import '../../index.css';
import ConstructorPage from '../AppConstructorPage/AppConstructorPage';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

function App() {
    const dispatch = useDispatch();
    const { ingredients } = useSelector((state) => state.ingredients);
    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    return (
      <>
          <AppHeader />
          <>
              {
                  ingredients.length &&
                  <ConstructorPage/>
              }
          </>
      </>
  );
}
export default App;
