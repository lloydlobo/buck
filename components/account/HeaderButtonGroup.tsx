import React, { useState } from 'react';
import { AddConnectBank } from './AddConnectBank';
import { AddNewAccount } from './AddNewAccount';
import { ButtonGroup } from './ButtonGroup';

export function HeaderButtonGroup() {
    const [account, setAccount] = useState(''); // Accounts state.
    const [connectBank, setConnectBank] = useState(''); // Accounts state.

    const [showNewAccount, setShowNewAccount] = useState(false); // To reveal add task form
    const [showConnectBank, setShowConnectBank] = useState(false); // To reveal add task form

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(account);
    };
    return (
        <>
            <div className="btn-group mb-4">
                <ButtonGroup
                    handleNewAccount={() => setShowNewAccount(!showNewAccount)}
                    handleConnectBank={() =>
                        setShowConnectBank(!showConnectBank)
                    }
                />
            </div>
            {showNewAccount && (
                <AddNewAccount onSubmit={onSubmit} setAccount={setAccount} />
            )}
            {showConnectBank && (
                <AddConnectBank
                    onSubmit={onSubmit}
                    setConnectBank={setConnectBank}
                />
            )}
        </>
    );
}
