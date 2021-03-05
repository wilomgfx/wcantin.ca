import React, { ReactElement, ReactChild } from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';
interface Props {
  children: ReactChild;
  isLast?: boolean;
  to: string;
}

export default function MenuItem({
  children,
  isLast,
  to = '/',
  ...rest
}: Props): ReactElement {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
}
