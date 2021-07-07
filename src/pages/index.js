import * as React from "react"
import { useFlags } from 'gatsby-plugin-launchdarkly'


const ChildComponent = () => {

  // The following contains all of the client-side flags. Flag names are
  // automatically converted to snake-case which will allow you to pull out
  // one or more flags directly through destructuring.
  const flags = useFlags()
  const { showNewPdpRoomUpgrades = false } = flags;
  return (
    <main>
      <h1>Gatsby POC with Launch Darkly</h1>

      <div>all feature flags in Launch Darkly: {JSON.stringify(flags)}</div>
      <div>enable feature flag showNewPdpRoomUpgrades in Release1 in <a href="https://app.launchdarkly.com/settings/projects" target="_blank">Launch Darkly</a> to see a component in this page</div>

      {showNewPdpRoomUpgrades && 
        <div style={{backgroundColor: 'green'}}>
          <h1>This is was turned on from Launch Darkly in real time</h1>
        </div>
      }

    </main>
  )
}

const IndexPage = () => {


  return (
      <ChildComponent />
  )
}

export default IndexPage
