import React from 'react'

export default function Loader({loading, children}) {
    return (
       !loading ? <div className="loader"> <h2>Loading...</h2></div> : children
    )
}
