import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Memorize } from './06-memos/memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHook } from './03-useFetch/MultipleCustomHook'
// import { FormConCustomHook } from './02-useEffect/FormConCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memorize />
  </StrictMode>,
)
