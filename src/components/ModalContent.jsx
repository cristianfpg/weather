import {ModalWrapper} from "../styles/ModalWrapper"
import PropTypes from "prop-types";
import WeatherByCity from "./WeatherByCity.jsx";
import { handleFetch } from "../app/functions.js";
import { useRef, useState } from "react";

const ModalContent = ({onClose})=>{
  const inputRef = useRef();
  const [data, setData] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleFetch(inputRef.current.value).then((result)=>{
      setData(JSON.parse(result))
    })
  }


  return <ModalWrapper>
      <button onClick={onClose}>X</button>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Type another place here" />
      </form>
      <WeatherByCity data={data} width={100}/>
    </div>
  </ModalWrapper>
}

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default ModalContent