import React, { useContext } from "react";
import AppContext from "../ctx";
import { Select } from "@chakra-ui/react";

const ONE_MIN = 60 * 1000;
const FIVE_MINS = 5 * 60 * 1000;
const TEN_MINS = 10 * 60 * 1000;
const FIFTH_MINS = 15 * 60 * 1000;
const TWENTY_MINS = 20 * 60 * 1000;
const TWENTY_FIVE_MINS = 25 * 60 * 1000;
const THIRTY_MINS = 20 * 60 * 1000;
const THIRTY_FIVE_MINS = 35 * 60 * 1000;
const FORTY_MINS = 40 * 60 * 1000;

const Picker = () => {
  const { minutes, setMinutes }: any = useContext(AppContext);

  const handleChange = (event: any) => {
    setMinutes(Number(event.target.value));
  };

  return (
    <div>
      {/* <label htmlFor="minutes">Minutes:</label> */}
      <Select
        color={"black"}
        cursor={"pointer"}
        placeholder="Select frecuency time"
        id="minutes"
        value={minutes}
        onChange={handleChange}
      >
        <option value={ONE_MIN}>1 minute</option>
        <option value={FIVE_MINS}>5 minutes</option>
        <option value={TEN_MINS}>10 minutes</option>
        <option value={FIFTH_MINS}>15 minutes</option>
        <option value={TWENTY_MINS}>20 minutes</option>
        <option value={TWENTY_FIVE_MINS}>25 minutes</option>
        <option value={THIRTY_MINS}>30 minutes</option>
        <option value={THIRTY_FIVE_MINS}>35 minutes</option>
        <option value={FORTY_MINS}>40 minutes</option>
      </Select>
    </div>
  );
};

export default Picker;
