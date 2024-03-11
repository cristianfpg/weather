import {ModalWrapper} from "../styles/ModalWrapper"
import PropTypes from 'prop-types';
import WeatherByCity from "./WeatherByCity.jsx";

const ModalContent = ({onClose})=>{
  return <ModalWrapper>
      <button onClick={onClose}>X</button>
    <WeatherByCity data={{}} />
  </ModalWrapper>
}

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default ModalContent