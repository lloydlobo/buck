import React, { useEffect, useState } from 'react';
import CategoryTable from '../components/category/BucketsTable';
import Stats from '../components/category/stats/Stats';
import Layout from '../components/Layout';
import ButtonGroupBuckets from '../components/ui/button/ButtonGroupBuckets';
import { SpinnerLoading } from '../components/ui/SpinnerLoading';
import { MenuItems } from '../utils/menuItems';

export default function CategoryScreen() {
    const category = {
        Recent: [{ name: '' }],
        Todo: [{ name: '' }],
        Consolidated: [{ name: '' }],
    };

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
        <Layout title="Category">
            {loading ? (
                <SpinnerLoading />
            ) : (
                <div className="my-2 grid grid-flow-row gap-2">
                    <Stats />

                    <ButtonGroupBuckets />

                    <CategoryTable />
                </div>
            )}
        </Layout>
    );
}
