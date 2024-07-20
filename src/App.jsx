import React, { useState } from 'react'
import Introduction from './components/Introduction'
import Quiz from './components/Quiz'
import './App.css'

function App() {
    /*================  State and Hooks ==============*/
    const [page, setPage] = useState(false)
    /*================  Side Effects ==============*/
    /*================  Helper Functions  ==============*/
    function togglePage() {
        setPage(prevPage => !prevPage)
    }
    /*================  Event Handlers and Logic ==============*/


    /*================  Return JSX  ==============*/
    return (
        <>
            {page ? 
            <Quiz togglePage={togglePage}/>
            :
            <Introduction togglePage={togglePage}/>}
        </>
    )
}

export default App
