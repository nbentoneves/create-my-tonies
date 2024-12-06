import type { ButtonProps } from '@chakra-ui/react';
// eslint-disable-next-line no-duplicate-imports
import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import React from 'react';
import { LuX } from 'react-icons/lu';

export type CloseButtonProps = ButtonProps;

export const CloseButton = React.forwardRef<
    HTMLButtonElement,
    CloseButtonProps
>(function CloseButton(props, ref) {
    return (
        <ChakraIconButton
            variant="ghost"
            aria-label="Close"
            ref={ref}
            {...props}
        >
            {props.children ?? <LuX />}
        </ChakraIconButton>
    );
});
