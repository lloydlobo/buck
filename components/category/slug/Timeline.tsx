import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { transactions } from '../../../utils/transactions';
import { TimelineItem } from './TimelineItem';

export function Timeline() {
    const [T, setT] = useState(transactions);
    const [collapseList, setCollapseList] = useState(true);

    useEffect(() => {
        setT(T);
    }, [T]);

    return (
        <>
            <ol
                className={`relative ${
                    collapseList
                        ? 'border-l border-transparent'
                        : 'border-l border-gray-200 dark:border-gray-700'
                } `}
            >
                {T.map((transact) => {
                    // console.log(id); TODO: Find the latest transaction and assign isLatest=true.
                    return (
                        <TimelineItem
                            key={transact.uid}
                            name={transact.memo}
                            date={transact.date}
                            body={transact.amount}
                            isLatest={true}
                            isCollapsed={collapseList}
                        />
                    );
                })}
            </ol>
        </>
    );
}
