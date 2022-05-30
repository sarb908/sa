import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
const AddProduct = (props) => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    title: "",
    category: "",
    gender: "",
    imageSrc: "https://picsum.photos/seed/picsum5/421/261",
    price: "15.00",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const radioHandler = (e) => {
    setForm({ ...form, gender: e });
  };
  const submitHandler = () => {
    for (let [key, value] of Object.entries(form)) {
      if (value.trim() === "") {
        return;
      }
    }
    props.addData({ ...form });
  };
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Input
              data-cy="add-product-title"
              name="title"
              placeholder="title"
              onChange={inputHandler}
            />
            <Select
              data-cy="add-product-category"
              name="category"
              onChange={inputHandler}
            >
              <option data-cy="add-product-category-shirt" value="shirt">
                shirt
              </option>
              <option data-cy="add-product-category-pant" value="shirt">
                pant
              </option>
              <option data-cy="add-product-category-jeans" value="shirt">
                jeans
              </option>
            </Select>
            <RadioGroup data-cy="add-product-gender" onChange={radioHandler}>
              <Radio
                data-cy="add-product-gender-male"
                name="gender"
                value="male"
              >
                male
              </Radio>
              <Radio
                data-cy="add-product-gender-female"
                name="gender"
                value="female"
              >
                female
              </Radio>
              <Radio
                data-cy="add-product-gender-unisex"
                name="gender"
                value="unisex"
              >
                unisex
              </Radio>
            </RadioGroup>
            <Input
              data-cy="add-product-price"
              name="price"
              placeholder="price"
              onChange={inputHandler}
            />
            <Button data-cy="add-product-submit-button" onClick={submitHandler}>
              Create
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
