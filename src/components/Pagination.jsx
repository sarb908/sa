import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";

const Pagination = (props) => {
  // TODO: Remove below const and instead import them from chakra
  console.log("pag");
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button
        data-cy="pagination-first-button"
        onClick={() => props.first()}
        disabled={props.page <= 1}
      >
        first
      </Button>
      <Button
        data-cy="pagination-previous-button"
        onClick={() => props.pageHandler(-1)}
      >
        prev
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => props.limitHandler(e.target.value)}
      >
        <option data-cy="pagination-limit-3" value="3">
          3
        </option>
        <option data-cy="pagination-limit-6" value="6">
          6
        </option>
        <option data-cy="pagination-limit-9" value="9">
          9
        </option>
      </Select>
      <Button
        data-cy="pagination-next-button"
        onClick={() => props.pageHandler(1)}
        disabled={props.page * props.limit > props.totalCount}
      >
        next
      </Button>
      <Button data-cy="pagination-last-button" onClick={() => props.last()}>
        last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
