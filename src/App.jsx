import { useState, useCallback, useEffect } from "react";
import { createPortal } from 'react-dom';
import { AppWrapper } from "./styles/AppWrapper.js"
import { ButtonModal } from "./styles/ButtonModal.js"
import WeatherByCity from "./components/WeatherByCity.jsx";
import ModalContent from "./components/ModalContent.jsx";

function App() {
  const [allData, setAllData] = useState([]) 
  const [showModal, setShowModal] = useState(false);

  async function handleFetch(q) {
    const options = {
      method: "GET"
    };
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&days=3&q=${q}`;
    const response = await fetch(url, options);
    const result = await response.text();
    return result
  }

  const fetchDefaultPlaces = useCallback(()=>{
    const places = ['colombia', 'australia', 'egypt', 'chicago', 'india', 'poland'];

    places.map((place)=>{
      handleFetch(place).then((result)=>{
        setAllData(allData => ([...allData, JSON.parse(result)]))
      })
    })
  }, [])

  useEffect(()=>{
    fetchDefaultPlaces()
  },[])

  return (
    <AppWrapper>
      <h1>Global Weather Forecast</h1>
      <div className="wrapper">
        {allData.map((data, id)=>{
          return <WeatherByCity key={id} data={data}/>
        })}
      </div>
      <ButtonModal onClick={() => setShowModal(true)}>Looking for another city?</ButtonModal>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </AppWrapper>
  )
}

export default App
