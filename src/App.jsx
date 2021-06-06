import React, { useState, useEffect } from "react";
import AppHeader from '../src/components/AppHeader/AppHeader'
import './index.css';
import ConstructorPage from './components/AppConstructorPage/AppConstructorPage';
function App() {
    const [data, setData] = useState([]);
    const url = "https://norma.nomoreparties.space/api/ingredients";
    const fetchedData = () => {
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })
            .then((res) => {
                setData(res);
            })
            .catch((e) => {
                console.error('error:', e);
            });
    };

    useEffect(() => {
        fetchedData();
    }, []);

    return (
      <>
          <AppHeader />
          {data.data && data.success && (
              <>
                  <ConstructorPage dataBurgers={data.data} />
              </>
          )}
      </>
  );
}
export default App;
