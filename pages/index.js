import { CounterProvider } from "../src/Context/functionApproach/counterContext";
import App from "../src/Context/functionApproach/App";
export default function Home() {
  return (
   <CounterProvider>
     <App/>
   </CounterProvider>
  )
}
