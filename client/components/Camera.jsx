import React from 'react'

export class Camera extends React.Component {
  render() {
    return (
      <div className="camera">
          <h2>Camera</h2>
          <input type="file" accept="image/*" capture="camera" />
      </div>
    )
  }
}

export default Camera


