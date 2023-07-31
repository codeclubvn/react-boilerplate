import { Accessibility, Airplay } from 'lucide-react'
import { ButtonSizes, ButtonColors, Button } from './components/Button'
import { Input } from './components'

function App() {
    return (
        <div className="flex flex-col items-start space-y-4 p-2">
            <div>App</div>
            <ButtonContainer />
        </div>
    )
}

const ButtonContainer = () => {
    const defaultOnClick = () => {
        console.log('test onclick')
    }
    const asynOnClick = async () => {
        console.log('clicked')
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
    }
    const renderDefault = () => {
        return (
            <>
                {ButtonSizes.map((size) => {
                    return ButtonColors.map((color) => {
                        return (
                            <div className="space-x-1">
                                <Button
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                                <Button
                                    startDecorator={<Accessibility />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                                <Button
                                    endDecorator={<Airplay />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                                <Button
                                    startDecorator={<Accessibility />}
                                    endDecorator={<Airplay />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                            </div>
                        )
                    })
                })}
            </>
        )
    }
    const renderDisabled = () => {
        return (
            <>
                {ButtonSizes.map((size) => {
                    return ButtonColors.map((color) => {
                        return (
                            <div className="space-x-1">
                                <Button
                                    disabled
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                                <Button
                                    disabled
                                    startDecorator={<Accessibility />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                                <Button
                                    disabled
                                    endDecorator={<Airplay />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                                <Button
                                    disabled
                                    startDecorator={<Accessibility />}
                                    endDecorator={<Airplay />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Default
                                </Button>
                            </div>
                        )
                    })
                })}
            </>
        )
    }

    const renderDefaultOutlined = () => {
        return (
            <>
                {ButtonSizes.map((size) => {
                    return ButtonColors.map((color) => {
                        return (
                            <div className="space-x-1">
                                <Button
                                    outlined
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Outlined
                                </Button>
                                <Button
                                    outlined
                                    startDecorator={<Accessibility />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Outlined
                                </Button>
                                <Button
                                    outlined
                                    endDecorator={<Airplay />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Outlined
                                </Button>
                                <Button
                                    outlined
                                    startDecorator={<Accessibility />}
                                    endDecorator={<Airplay />}
                                    size={size}
                                    color={color}
                                    onClick={defaultOnClick}
                                >
                                    Outlined
                                </Button>
                            </div>
                        )
                    })
                })}
            </>
        )
    }

    const renderAsync = () => {
        return (
            <>
                {ButtonSizes.map((size) => {
                    return ButtonColors.map((color) => (
                        <div className="space-x-1">
                            <Button
                                size={size}
                                color={color}
                                onClick={asynOnClick}
                            >
                                Async
                            </Button>
                            <Button
                                startDecorator={<Accessibility />}
                                size={size}
                                color={color}
                                onClick={asynOnClick}
                            >
                                Async
                            </Button>
                            <Button
                                endDecorator={<Airplay />}
                                size={size}
                                color={color}
                                onClick={asynOnClick}
                            >
                                Async
                            </Button>
                            <Button
                                startDecorator={<Accessibility />}
                                endDecorator={<Airplay />}
                                size={size}
                                color={color}
                                onClick={asynOnClick}
                            >
                                Async
                            </Button>
                        </div>
                    ))
                })}
            </>
        )
    }

    return (
        <>
            <Input />
            {renderDisabled()}
            {renderDefaultOutlined()}
            {renderDefault()}
            {renderAsync()}
        </>
    )
}

export default App
