import React from 'react'

export default function ({ children, onClick }) {
  return (
    <button onClick={onClick}>
        {children}
      </button>
  )
}
