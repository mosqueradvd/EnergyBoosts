import React, { useContext } from "react";
import AppContext from "../ctx";
import { Select } from "@chakra-ui/react";

const Picker = () => {
  const { minutes, setMinutes }: any = useContext(AppContext);

  const handleChange = (event: any) => {
    setMinutes(Number(event.target.value));
  };

  return (
    <div>
      {/* <label htmlFor="minutes">Minutes:</label> */}
      <Select
        cursor={"pointer"}
        placeholder="Select your time"
        id="minutes"
        // value={minutes}
        onChange={handleChange}
      >
        <option value="1000">10</option>
        <option value="2000">20</option>
        <option value="3000">30</option>
        <option value="4000">40</option>
        <option value="6000">60</option>
      </Select>
    </div>
  );
};

export default Picker;
