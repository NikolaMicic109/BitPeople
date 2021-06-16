import "./App.css"
import Users from "../Users/Users"
import Header from "../Header/Header"
import { useEffect, useState, useToggle } from "react"



const App = () => {

    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])
    const [search, setSearch] = useState("")
    const [grid, setGrid] = useState(false)
    const [ref, setRef] = useState(false)

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=15")
            .then(res => res.json())
            .then(data => {
                setData(data.results)
                setFiltered(data.results)
            }
            )
    }, [ref])

    useEffect(() => {
        setFiltered(data.filter(d => (
            d.name.first.toLowerCase().includes(search.toLowerCase()) ||
            d.name.last.toLowerCase().includes(search.toLowerCase())
        )))
    }, [search])

    return (

        <div className="App">

            <Header refresh={() => { setRef(!ref) }} onViewChange={() => setGrid(!grid)} data={(arg) => { setSearch(arg) }} />
            <Users grid={grid} users={filtered} search={search} />

        </div>

    )

}


//Commentar za git


export default App