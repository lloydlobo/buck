import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { transactions } from '../../../utils/transactions';
import { TimelineItem } from './TimelineItem';
import { FaCompress, FaExpand } from 'react-icons/fa';

export function Timeline() {
    const [T, setT] = useState(transactions);
    const [collapseList, setCollapseList] = useState(false);

    const handleOnClickToggle = () => {
        setCollapseList(!collapseList);
    };

    useEffect(() => {
        setT(T);
    }, [T]);

    return (
        <>
            <div className="grid gap-4">
                <label className="swap place-self-end opacity-60">
                    <input
                        onChange={() => handleOnClickToggle()}
                        type="checkbox"
                    />
                    <div className="swap-on">
                        <FaExpand />
                    </div>
                    <div className="swap-off">
                        <FaCompress />
                    </div>
                </label>
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
            </div>
        </>
    );
}
