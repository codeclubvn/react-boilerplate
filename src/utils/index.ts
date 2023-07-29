export const wait = (duration: number = 300) =>
    new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
