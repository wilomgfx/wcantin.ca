import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
interface Props {
  toggle: () => void;
  isOpen: boolean;
}

export default function MenuToggle({ toggle, isOpen }: Props): ReactElement {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <MdClose /> : <MdMenu />}
    </Box>
  );
}
