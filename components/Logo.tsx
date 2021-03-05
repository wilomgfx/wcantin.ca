import React, { ReactElement } from 'react';
import { Box, Text } from '@chakra-ui/react';
interface Props {
  w: any;
  color: any;
}

export default function Logo(props: Props): ReactElement {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
}
