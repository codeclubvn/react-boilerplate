import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: cx.ArgumentArray) {
    return twMerge(cx(inputs))
}

export const wait = (duration: number = 500) =>
    new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
