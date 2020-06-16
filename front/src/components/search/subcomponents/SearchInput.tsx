import React, { ChangeEvent, RefObject } from 'react';
import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/core';

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClearInput: () => void;
  inputRef: RefObject<HTMLInputElement>;
  inputValue: string;
}

const SearchInput = ({ handleChange, handleClearInput, inputRef, inputValue }: Props) => (
  <Flex w="xs" direction="column" justify="center" m="100px auto 25px">
    <InputGroup>
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter show name"
        variant="flushed"
        focusBorderColor="teal.500"
        ref={inputRef}
        size="md"
        autoFocus
      />
      {inputValue && (
        <InputRightElement
          children={
            <IconButton
              aria-label="Clear input"
              icon="small-close"
              onClick={handleClearInput}
              size="xs"
              variant="ghost"
            />
          }
        />
      )}
    </InputGroup>
  </Flex>
);

export default SearchInput;
