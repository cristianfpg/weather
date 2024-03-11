import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { AppWrapper } from "./styles/AppWrapper.js"
import { ButtonModal } from "./styles/ButtonModal.js"
import WeatherByCity from "./components/WeatherByCity.jsx";
import ModalContent from "./components/ModalContent.jsx";
import { handleFetch } from "./app/functions.js";

function App() {
  const [allData, setAllData] = useState([]) 
  const [showModal, setShowModal] = useState(false);

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
          return <WeatherByCity key={id} data={data} width={48}/>
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
