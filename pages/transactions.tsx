import React from 'react';
import Stats from '../components/bucket/stats/Stats';
import Layout from '../components/Layout';
import TransactionsTable from '../components/transaction/TransactionsTable';
import ButtonGroupBuckets from '../components/ui/button/ButtonGroupBuckets';

export default function Buckets() {
    const category = {
        Recent: [{ name: '' }],
        Todo: [{ name: '' }],
        Consolidated: [{ name: '' }],
    };

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <Layout title="Buckets">
            <div className="grid grid-flow-row">
                <div className="mb-2 mt-0 flex">
                    <Stats />
                </div>
                <ButtonGroupBuckets />
                <div className="mb-2">
                    <TransactionsTable />
                </div>
            </div>
        </Layout>
    );
}
