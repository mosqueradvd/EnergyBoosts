import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import AppContext from "../ctx";

const MIN_TIME = 40 * 60 * 1000; // 40 minutes default
const CLOSING_TIME = 5 * 60 * 1000;

const listRef = ref(storage, "exercises/");

function ProductAddToCart() {
  const [images, setImages] = React.useState([]);
  const [showModal, setShowModal] = React.useState(true);
  const { minutes }: any = React.useContext(AppContext);
  const [currentImg, setCurrentImg]: any = React.useState([]);

  const handleClose = () => setShowModal(!showModal);

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        setShowModal(true);
      },
      minutes > 0 ? minutes : MIN_TIME
    );

    return () => {
      clearInterval(interval);
    };
  }, [minutes]);

  React.useEffect(() => {
    let timeoutId: any;
    if (showModal) {
      timeoutId = setTimeout(() => {
        setShowModal(false);
      }, CLOSING_TIME);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showModal]);

  // const modalOpening = () => {
  //   setShowModal(true);
  //   setTimeout(() => {
  //     setShowModal(false);
  //   }, 50);
  // }

  // React.useEffect(() => {
  //   const modalOpening = setTimeout(
  //     () => {
  //       console.log("abriendo modal...");
  //       setShowModal(true);
  //     },
  //     minutes > 0 ? minutes : MIN_TIME
  //   );

  // showModal && clearTimeout(modalOpening);

  // setTimeout(() => {
  //   console.log("cerrar");
  //   clearTimeout(modalOpening);
  //   setShowModal(false);
  // }, 5000);

  // setTimeout(() => {
  //   console.log("cerrando... modal");
  //   handleClose();
  // }, CLOSING_TIME);
  // }, []);

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

  const data = {
    isNew: true,
    // imageURL:
    //   "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: `Do this exercise for 5 minutes`,
  };

  const { onClose } = useDisclosure();

  return (
    <>
      {showModal && (
        <>
          <Modal
            closeOnOverlayClick={true}
            isOpen={showModal}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Box display="flex" alignItems="baseline">
                  {data.isNew && (
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="green"
                    >
                      Time to Rest
                    </Badge>
                  )}
                </Box>
              </ModalHeader>
              <ModalCloseButton onClick={handleClose} />
              <ModalBody pb={6}>
                <Flex
                  p={50}
                  w="full"
                  alignItems={"center"}
                  justifyContent="center"
                  direction="column"
                >
                  <Image
                    src={currentImg}
                    alt={`Picture of ${data.name}`}
                    roundedTop="lg"
                  />

                  <Box p="6">
                    <Flex
                      mt="1"
                      justifyContent="space-between"
                      alignContent="center"
                    >
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
                        <chakra.a href={"#"} display={"flex"}></chakra.a>
                      </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="2xl"
                        color={useColorModeValue("gray.800", "white")}
                      >
                        <Box as="span" color={"gray.600"} fontSize="lg"></Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}

export default ProductAddToCart;
