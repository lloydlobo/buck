/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import OptionDivider from "./OptionDivider";
import QuickView from "./QuickView";

export default function BucketItem({ bucket }: { bucket: any }) {
    return (
        <div className="">
            <Link href={`/bucket/${bucket.slug}`}>
                {/* <a> */}
                {/* <img */}
                {/*     src={bucket.image} */}
                {/*     alt={bucket.name} */}
                {/*     className='rounded shadow' */}
                {/* /> */}
                {/* </a> */}
            </Link>

            <div className="flex items-center justify-between gap-8 px-2 py-1">
                <div className="flex items-center gap-8 px-2 py-1">
                    <Link href={`/bucket/${bucket.slug}`}>
                        {/* <a> */}
                        <p className="">{bucket.name}</p>
                        {/* </a> */}
                    </Link>

                    <div className="flex tracking-tighter opacity-70">
                        <p className="">{bucket.available}</p>
                        <span>&nbsp;of&nbsp;</span>
                        <p className="">{bucket.budgeted}</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex gap-2">
                        <OptionDivider />
                        {/* <BucketOption /> */}
                        <button className="btn-primary btn" type="button">
                            Update
                        </button>
                        <QuickView />
                    </div>
                </div>
            </div>
        </div>
    );
}
