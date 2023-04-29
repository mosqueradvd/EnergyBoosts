import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Select,
} from "@chakra-ui/react";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
const listRef = ref(storage, "exercises/");

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Exercise Duration: 2.5 minutes",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function ProductAddToCart() {
  const [images, setImages] = React.useState([]);
  const [selectedTime, setSelectedTime] = React.useState("0.5");
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  const getAllMedia = () => {
    listAll(listRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => {
          return getDownloadURL(ref(storage, itemRef));
        });
        Promise.all(promises).then((urls) => {
          setImages(urls);
        });
      })
      .catch((error) => {
        console.log("My Err", error);
      });
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, selectedTime * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [selectedTime, images.length, currentImageIndex]);

  React.useEffect(() => {
    getAllMedia();
  }, []);

  return (
    <Flex
      p={50}
      w="full"
      alignItems={"center"}
      justifyContent="center"
      direction="column"
    >
      <Flex p={50} w="full" alignItems={"center"} justifyContent="center">
        <Box>
          <Select
            value={selectedTime}
            onChange={handleTimeChange}
            bg={"purple.400"}
            color="white"
            cursor="pointer"
            focusBorderColor="transparent"
          >
            <option value="0.00083333">3 seconds</option>
            <option value="0.25">15 minutes</option>
            <option value="0.5">30 minutes</option>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
          </Select>
        </Box>
      </Flex>

      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        {/* <Image
          src={images[0]}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        /> */}

        <Image
          src={images[currentImageIndex]}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                Time to Rest
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} /> */}
                {/* Duration: 2.5 minutes */}
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                {/* £ */}
              </Box>
              {/* {data.price.toFixed(2)} */}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
