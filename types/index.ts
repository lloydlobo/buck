/* d3 js */

export type DataItem = {
    // name: string;
    // x: number; // vulnerability
    // y: number; // readiness
    // size: number; // CO2 emission
    // color: string;
    // categoryy: "RED" | "GREEN" | "YELLOW" | "BLUE";
    // annotation?: "top" | "right" | "left" | "bottom";
    group: string;
    subGroup: string;
    size: number;
};

export type ScatterplotProps = {
    width: number;
    height: number;
    data: DataItem[];
};

// Information needed to build the tooltip
export type InteractionData = DataItem & {
    xPos: number;
    yPos: number;
};

    // data: { x: number; y: number; size: number; group: string, subGroup: string, }[];
