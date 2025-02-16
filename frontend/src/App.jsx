import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from '../config.jsx'
import '@rainbow-me/rainbowkit/styles.css'

import { Outlet } from 'react-router-dom'
import Header from './components/layout/header/index.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ToastContainer/>
        <Header/>
        <main>
           <Outlet/>
        </main>
       </QueryClientProvider> 
     </WagmiProvider>
  )
}
export default App;