import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  // Find the first available connector
  const availableConnector = connectors.find((connector) => {
    return connector.ready // or any other logic to check for availability
  })

  // If an available connector is found, render it
  if (!availableConnector) {
    return <div>No available connectors</div>
  }

  return (
    <WalletOption
      key={availableConnector.uid}
      connector={availableConnector}
      onClick={() => connect({ connector: availableConnector })}
    />
  )
}

function WalletOption({ connector, onClick }) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    const checkProvider = async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    }

    checkProvider()
  }, [connector])

  return (
    <button disabled={!ready} onClick={onClick}>
      {connector.name}
    </button>
  )
}
