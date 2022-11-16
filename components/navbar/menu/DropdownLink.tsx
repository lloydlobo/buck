import Link from 'next/link';
import React from 'react';

export function DropdownLink(props: {
    [x: string]: any; // Allows JSX attributes like id, className.
    href: any;
    children: any | JSX.Element;
}): JSX.Element {
    let { href, children, ...rest } = props;

    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    );
}
