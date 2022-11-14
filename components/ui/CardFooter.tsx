import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function CardFooter() {
    return (
        <div className="flex items-center justify-between border-t border-base-200 px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a href="#" className="btn relative">
                    Previous
                </a>
                <a href="#" className="btn relative">
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-neutral-content">
                        Showing <span className="font-medium">1</span> to{' '}
                        <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md"
                        aria-label="Pagination"
                    >
                        <a
                            href="#"
                            className="btn relative inline-flex rounded-l-full px-2 py-2 text-sm 
                            font-medium focus:z-20"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        <a
                            href="#"
                            aria-current="page"
                            className="btn relative z-10 border-r border-l border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="btn relative z-10 border-r border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="btn relative z-10 border-r border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                        >
                            3
                        </a>
                        <span
                            className="btn relative z-10 border-r border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                            // className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            ...
                        </span>
                        <a
                            href="#"
                            className="btn relative z-10 border-r border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="btn relative z-10 border-r border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="btn relative z-10 border-r border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                        >
                            10
                        </a>
                        <a
                            href="#"
                            className="btn relative z-10 rounded-r-full border-l border-base-100 px-4 py-2 text-sm font-medium focus:z-20"
                            // className="relative z-10 btn px-4 py-2 text-sm font-medium rounded-r-full focus:z-20"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
