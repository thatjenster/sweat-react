import React from 'react'

const Controls = ({ activeStatus, handleReset }) => {
  const [active, setActive] = activeStatus
  return (
    <div className="controls-wrapper">
      <button id="start_stop" onClick={() => setActive(!active)}>
        {active ? <span><i className="fa fa-pause-circle" aria-hidden="true"></i></span> : <span><i className="fa fa-play-circle" aria-hidden="true"></i></span>}
      </button>
      <button id="reset" onClick={handleReset}>
      <i className="fa fa-repeat" aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default Controls