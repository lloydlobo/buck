import styles from "../../styles/tooltip.module.css";
import { InteractionData } from "../../types";

type TooltipProps = {
    interactionData: InteractionData | undefined;
};

export const Tooltip = ({ interactionData }: TooltipProps) => {
    if (!interactionData) {
        return null;
    }

    // const { xPos, yPos, name, color, x, y, size } = interactionData;
    const { xPos, yPos, group, subGroup, size } = interactionData;

    return (
        <div
            className={styles.tooltip}
            style={{
                left: xPos,
                top: yPos,
            }}
        >
            <b className={styles.title}>{group}</b>

            <div className={styles.topHalfContainer} style={{ borderColor: 'currentcolor' }}>
                <div className={styles.row}>
                    <b className={styles.row}></b>
                    {/* <span>Vulnerability index</span> */}
                    {/* <b>{Math.round(x * 100) / 100}</b> */}
                    <b>{subGroup}</b>
                </div>
                <div className={styles.row}>
                    {/* <span>Size</span> */}
                    {/* <b>{Math.round(y * 100) / 100}</b> */}
                </div>
            </div>

            <div className={styles.separator} />

            <div className={styles.row}>
                <span>
                    Size
                    (sq.m)
                    <br />
                </span>
                <b>{Math.round(size * 100) / 100}</b>
            </div>
        </div>
    );
};
