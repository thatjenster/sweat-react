import React, { useState, useEffect, useRef } from 'react'

import { useInterval } from './Hooks/useInterval'

import TimeSet from './TimeSet'
import Timer from './Timer'
import Controls from './Controls'

const Clock = () => {
  const [breakVal, setBreakVal] = useState(2)
  const [sessionVal, setSessionVal] = useState(5)
  const [mode, setMode] = useState('session')
  const [time, setTime] = useState(sessionVal * 60 * 1000)
  const [active, setActive] = useState(false)
  const beep = useRef()

  useInterval(() => setTime(time - 1000), active ? 1000 : null)

  useEffect(() => {
    setTime(sessionVal * 60 * 1000)
  }, [sessionVal])

  useEffect(() => {
    if (time === 0 && mode === 'session') {
      beep.current.play()
      setMode('break')
      setTime(breakVal * 60 * 1000)
    } else if (time === 0 && mode === 'break') {
      beep.current.play()
      setMode('session')
      setTime(sessionVal * 60 * 1000)
    }
  }, [time, breakVal, sessionVal, mode])

  const handleReset = () => {
    beep.current.pause()
    beep.current.currentTime = 0
    setActive(false)
    setMode('session')
    setBreakVal(2)
    setSessionVal(5)
    setTime(5 * 60 * 1000)
  }

  return (
    <div className="container-clock">
      <main>
        <div className="clock-wrapper">
          <Timer currentMode={[mode, setMode]} currentTime={[time, setTime]} />
          <Controls
            activeStatus={[active, setActive]}
            handleReset={handleReset}
          />
        </div>
        <div className="timeset-wrapper">
          <TimeSet type={'Break'} value={[breakVal, setBreakVal]} />
          <TimeSet type={'Session'} value={[sessionVal, setSessionVal]} />
        </div>
      </main>
      <audio id="beep" ref={beep} />
    </div>
  )
}

export default Clock;