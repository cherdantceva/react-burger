import React, { useEffect } from "react";
import AppHeader from '../AppHeader/AppHeader'
import '../../index.css';
import ConstructorPage from '../AppConstructorPage/AppConstructorPage';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
                  <DndProvider backend={HTML5Backend}>
                    <ConstructorPage/>
                  </DndProvider>
              }
          </>
      </>
  );
}
export default App;
