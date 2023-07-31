import { Button } from './components/Button'
import { Alert, Toaster, toast } from './components'

function App() {
    return (
        <div className="flex flex-col items-start space-y-4 p-2">
            <div>App</div>

            <>
                <Alert />
                <Alert color="danger" />
                <Button
                    onClick={() => {
                        toast.success()
                    }}
                >
                    Toast Ngon
                </Button>
                <Button
                    onClick={() => {
                        toast.danger()
                    }}
                >
                    Toast Ngu
                </Button>
                <Toaster />
            </>
        </div>
    )
}

export default App
