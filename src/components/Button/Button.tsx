import { useState } from 'react'
import { cn, wait } from '../../utils'
import { VariantProps, tv } from 'tailwind-variants'

export const ButtonSizes = ['xs', 'sm', 'base', 'lg', 'xl'] as const
type ButtonSize = (typeof ButtonSizes)[number]

export const ButtonColors = [
    'primary',
    'dark',
    'gray',
    'white',
    'green',
    'red',
    'alt',
    'alt-dark',
] as const
type ButtonColor = (typeof ButtonColors)[number]

export const buttonVariants = tv({
    base: [
        'inline-flex flex-row content-center items-center gap-2 rounded-lg px-3 py-2 align-top text-white',
    ],
    variants: {
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
        },
        color: {
            primary: 'bg-primary-700',
            dark: 'bg-gray-800',
            gray: 'bg-gray-200 text-gray-800',
            white: 'bg-white text-gray-800',
            green: 'bg-green-700',
            red: 'bg-red-700',
            alt: 'bg-gray-800',
            ['alt-dark']: 'bg-gray-800',
        },
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
    loading?: boolean
    size?: ButtonSize
    color?: ButtonColor
}

export const Button = ({
    startDecorator,
    endDecorator,
    children,
    onClick,
    size = 'base',
    color = 'primary',
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

    console.log(
        'buttonVariants({ size })',
        buttonVariants({ size, color }).split(' ').length,
    )

    return (
        <button
            {...props}
            onClick={onClickHandler}
            className={cn(buttonVariants({ size, color }))}
        >
            {startDecorator && (
                <span className="btn-icon">{startDecorator}</span>
            )}
            {children}
            {endDecorator && <span className="btn-icon">{endDecorator}</span>}
        </button>
    )
}
