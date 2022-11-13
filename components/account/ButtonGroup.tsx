import React from 'react';
import { Button } from './Button';

export function ButtonGroup({
    handleNewAccount,
    handleConnectBank,
}: any): JSX.Element {
    return (
        <>
            <Button onClick={handleNewAccount}>New Account</Button>
            <Button onClick={handleConnectBank}>Connect to bank</Button>
        </>
    );
}
