import React, { ReactElement } from 'react';
import { Grid, Box, Flex } from '@chakra-ui/react';
import MenuToggle from './MenuToggle';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
interface Props {}

export default function Header({}: Props): ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
        color={['gray', 'gray', 'primary.700', 'primary.700']}
      >
        <Logo
          w="100px"
          color={['gray', 'gray', 'primary.500', 'primary.500']}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </Flex>
    </header>
  );
}
