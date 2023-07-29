import { useState } from 'react'
import { wait } from '../../utils'
import { VariantProps, tv } from 'tailwind-variants'

export const buttonVariants = tv({
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            l: 'text-l',
            xl: 'text-xl',
        },
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
    loading?: boolean
    color?:
        | 'primary'
        | 'dark'
        | 'gray'
        | 'white'
        | 'green'
        | 'red'
        | 'alt'
        | 'alt-dark'
}

export const Button = ({
    startDecorator,
    endDecorator,
    children,
    onClick,
    size,
    ...props
}: ButtonProps) => {
    const [loading, setLoading] = useState(false)

    const isAsyncFunction = onClick?.constructor.name === 'AsyncFunction'

    const onClickHandler = isAsyncFunction
        ? (e) => {
              setLoading(true)
              Promise.all([onClick(e), wait()]).then(() => {
                  setLoading(false)
              })
          }
        : onClick

    if (loading) {
        startDecorator = (
            <svg
                fill="currentColor"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin text-xl"
            >
                <g>
                    <path d="M8,1V2.8A5.2,5.2,0,1,1,2.8,8H1A7,7,0,1,0,8,1Z" />
                </g>
            </svg>
        )
    }

    const className =
        'inline-flex flex-row content-center items-center gap-2 rounded-lg bg-primary-700 px-3 py-2 align-top text-white'

    return (
        <button
            {...props}
            onClick={onClickHandler}
            className={buttonVariants({ className, size })}
            // className="inline-flex flex-row content-center items-center gap-2 rounded-lg bg-primary-700 px-3 py-2 align-top text-xs text-white"
        >
            {startDecorator && (
                <span className="btn-icon">{startDecorator}</span>
            )}
            {children}
            {endDecorator && <span className="btn-icon">{endDecorator}</span>}
        </button>
    )
}
