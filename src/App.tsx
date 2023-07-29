import { Accessibility, Airplay } from 'lucide-react'
import { Button } from './components/Button'

function App() {
    return (
        <div className="flex flex-col items-start space-y-4 p-2">
            <div>App</div>
            <ButtonContainer />
        </div>
    )
}

const ButtonContainer = () => {
    const sizes: ('xs' | 'sm' | 'base' | 'l' | 'xl')[] = [
        'xs',
        'sm',
        'base',
        'l',
        'xl',
    ]
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
                {sizes.map((size) => {
                    return (
                        <div className="space-x-1">
                            <Button size={size} onClick={defaultOnClick}>
                                Default
                            </Button>
                            <Button
                                startDecorator={<Accessibility size="10" />}
                                size={size}
                                onClick={defaultOnClick}
                            >
                                Default
                            </Button>
                            <Button
                                endDecorator={<Airplay />}
                                size={size}
                                onClick={defaultOnClick}
                            >
                                Default
                            </Button>
                            <Button
                                startDecorator={<Accessibility size="10" />}
                                endDecorator={<Airplay />}
                                size={size}
                                onClick={defaultOnClick}
                            >
                                Default
                            </Button>
                        </div>
                    )
                })}
            </>
        )
    }

    const renderAsync = () => {
        return (
            <div className="space-x-1">
                <Button onClick={asynOnClick}>Async</Button>
                <Button
                    startDecorator={<Accessibility size="10" />}
                    onClick={asynOnClick}
                >
                    Async
                </Button>
                <Button endDecorator={<Airplay />} onClick={asynOnClick}>
                    Async
                </Button>
                <Button
                    startDecorator={<Accessibility />}
                    endDecorator={<Airplay />}
                    onClick={asynOnClick}
                >
                    Async
                </Button>
            </div>
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
