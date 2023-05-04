import React from "react";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

const listRef = ref(storage, "exercises/");

export default function Exercise() {
  const [images, setImages] = React.useState([]);
  const [currentImg, setCurrentImg]: any = React.useState([]);

  const getAllMedia = () => {
    listAll(listRef)
      .then((res) => {
        const promises = res.items.map((itemRef: any) => {
          return getDownloadURL(ref(storage, itemRef));
        });
        Promise.all(promises).then((urls: any) => {
          setImages(urls);
        });
      })
      .catch((error) => {
        console.log("Err", error);
      });
  };

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageKey = images[randomIndex];
    setCurrentImg(imageKey);
  }, [images]);

  React.useEffect(() => {
    getAllMedia();
  }, []);

  return (
    <>
      <Box
        borderRadius={"10"}
        height={"100%"}
        pb={6}
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "0 4px 6px rgba(9, 17, 28, 0.9)"
        )}
      >
        <Image
          src={currentImg}
          alt="Picture of exercise"
          roundedTop="lg"
          h="full"
          fit={"contain"}
        />
      </Box>
    </>
  );
}
