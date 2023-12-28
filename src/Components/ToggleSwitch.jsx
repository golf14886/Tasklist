import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 1rem;
  @media (max-width: 500px) {
    margin-left: -15px;
    transform: scale(0.8, 0.8);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${ToggleSlider} {
    background-color: #30475e;
  }
  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

function ToggleSwitch({ completed, id, startUpdate, setstartUpdate }) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleToggle = async (checked) => {
    try {
      const documentRef = doc(db, "list", id);
      await updateDoc(documentRef, { completed: checked });
      setstartUpdate(!startUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  const onChecked = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    handleToggle(newChecked);
  };

  return (
    <ToggleSwitchWrapper>
      <ToggleInput checked={isChecked} onChange={onChecked} />
      <ToggleSlider />
    </ToggleSwitchWrapper>
  );
}

export default ToggleSwitch;

ToggleSwitch.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  startUpdate: PropTypes.bool.isRequired,
  setstartUpdate: PropTypes.func.isRequired,
};
