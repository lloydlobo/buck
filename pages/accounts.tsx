import React, { useState } from 'react';
import { data } from '../utils/data/data';
import AccountsSidebar from '../components/account/AccountsSidebar';
import { Button } from '../components/account/Button';
import { ButtonGroup } from '../components/account/ButtonGroup';
import { HeaderButtonGroup } from '../components/account/HeaderButtonGroup';
import AccountsTable from '../components/AccountsTable';
import Stats from '../components/bucket/stats/Stats';
import Layout from '../components/Layout';
import TransactionsTable from '../components/TransactionsTable';
import ButtonGroupAccounts from '../components/ui/ButtonGroupAccounts';

// TODO: Keep Stats sticky.
export default function AccountsScreen() {
    const [accounts, setAccounts] = useState(data);
    return (
        <Layout title="Accounts">
            <div className="px-6">
                <div className="mb-2 mt-0 flex">
                    <Stats />
                </div>
                {/* <ButtonGroupAccounts /> */}

                <HeaderButtonGroup />

                <div className="grid grid-cols-12 border-t border-neutral">
                    <div className="col-span-5 row-span-2 h-full border-r border-neutral sm:col-span-3">
                        <AccountsSidebar data={accounts} />
                    </div>

                    <div className="col-span-7 row-span-1 sm:col-span-9">
                        <AccountsTable data={accounts} />
                        {/* <TransactionsTable /> */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
