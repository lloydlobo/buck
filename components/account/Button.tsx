import React, { ReactNode } from 'react';

export function Button({
    onClick,
    children,
}: {
    onClick: any;
    children: ReactNode | ReactNode[];
}): JSX.Element {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
}
