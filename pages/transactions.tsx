import React, { useEffect, useState } from 'react';
import Stats from '../components/category/stats/Stats';
import Layout from '../components/Layout';
import TransactionsTable from '../components/transaction/TransactionsTable';
import ButtonGroupBuckets from '../components/ui/button/ButtonGroupBuckets';
import { SpinnerLoading } from '../components/ui/SpinnerLoading';

export default function TransactionsScreen() {
    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ');
    };

    const [loading, setloading] = useState(true); // Pre-loader before page renders
    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);
    }, []);

    return (
        <Layout title="Transactions">
            {loading ? (
                <SpinnerLoading />
            ) : (
                <div className="grid grid-flow-row">
                    <div className="mb-2 mt-0 flex">
                        <Stats />
                    </div>
                    <ButtonGroupBuckets />
                    <div className="mb-2">
                        <TransactionsTable />
                    </div>
                </div>
            )}
        </Layout>
    );
}
