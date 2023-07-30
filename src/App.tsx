import { Accessibility, Airplay } from 'lucide-react'
import { ButtonSizes, ButtonColors, Button } from './components/Button'

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
                                    startDecorator={<Accessibility size="10" />}
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
                                    startDecorator={<Accessibility size="10" />}
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
                                startDecorator={<Accessibility size="10" />}
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
                                startDecorator={<Accessibility size="10" />}
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
            {renderDefault()}
            {renderAsync()}
        </>
    )
}

export default App
