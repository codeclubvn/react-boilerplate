import { Accessibility, Airplay } from 'lucide-react'
import { Button } from './components/Button'

function App() {
  return (
    <>
      <div>App</div>
      <div className="h-20 space-x-1">
        <Button
          onClick={() => {
            console.log('test onclick')
          }}
        >
          DEMO
        </Button>
        <Button
          startDecorator={<Accessibility size="10" />}
          onClick={() => {
            console.log('test onclick')
          }}
        >
          DEMO
        </Button>
        <Button
          endDecorator={<Airplay />}
          onClick={() => {
            console.log('test onclick')
          }}
        >
          DEMO
        </Button>
        <Button
          startDecorator={<Accessibility />}
          endDecorator={<Airplay />}
          onClick={() => {
            console.log('test onclick')
          }}
        >
          DEMO
        </Button>
      </div>
    </>
  )
}

export default App
