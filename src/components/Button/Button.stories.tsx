import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'

const meta: Meta<ButtonProps> = {
    title: 'components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        size: 'base',
        color: 'primary',
        disabled: false,
        children: 'Submit',
        onClick: () => {},
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'base', 'lg', 'xl'],
        },
        color: {
            control: 'select',
            options: ['primary', 'dark', 'gray', 'white', 'green', 'red'],
        },
    },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
    render: (props) => <Button {...props} />,
}

export default meta
