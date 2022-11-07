/**
 * progressColor function return color based on 0-100+ of progress.
 */
export const colorProgress = (value: number) => {
    let lower = (value: number) => value < 33
    let medium = (value: number) => value > 32 && value < 66
    let higher = (value: number) => value >= 66 && value < 100
    let target = (value: number) => value === 100
    let surplus = (value: number) => value > 100

    if (lower(value)) { return 'text-accent' }
    else if (medium(value)) { return 'text-info' }
    else if (higher(value)) { return 'text-success' }
    else if (target(value)) { return 'text-success-focus' }
    else if (surplus(value)) { return 'text-warning' }
}
