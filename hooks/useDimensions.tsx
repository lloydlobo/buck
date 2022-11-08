import { useEffect, useLayoutEffect, useState } from "react";

// Responsive Scatterplot with react
// https://www.react-graph-gallery.com/scatter-plot
export function useDimensions(targetRef: React.RefObject<HTMLDivElement>): { width: number; height: number; } {

    const getDimensions = () => {
        return {
            width: targetRef.current ? targetRef.current.offsetWidth : 0,
            height: targetRef.current ? targetRef.current.offsetHeight : 0
        };
    };

    const [dimensions, setDimensions] = useState(getDimensions);

    const handleResize = () => {
        setDimensions(getDimensions());
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useLayoutEffect(() => {
        handleResize();
    }, []);

    return dimensions;
}
