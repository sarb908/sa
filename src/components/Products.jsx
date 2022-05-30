import React, { useEffect, useState, useRef } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const totalCount = useRef();

  // TODO: Remove below const and instead import them from chakra

  ///////////////////
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      .then((d) => {
        setData(d.data);
        console.log(d);
        totalCount.current = d.headers["x-total-count"];
        console.log(totalCount);
      });
  }, [page, limit]);

  const pageHandler = (num) => {
    console.log(num);
    setPage((prev) => prev + num);
  };

  const addDataHandler = (e) => {
    axios
      .post("http://localhost:8080/products", {
        ...e,
      })
      .then((d) => d.data)
      .then((d) => setData({ ...data, d }));
  };
  const limitHandler = (e) => {
    setLimit(e);
  };

  return (
    <Flex flexDirection="row">
      <AddProduct addData={addDataHandler} />

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </Grid>

      <Pagination
        pageHandler={pageHandler}
        limitHandler={limitHandler}
        totalCount={totalCount}
        page={page}
        first={() => setPage(1)}
        last={() => setPage(Math.floor(totalCount / limit))}
        limit={limit}
      />
    </Flex>
  );
};

export default Products;
