import data from "./data"
import Topnav from './components/Topnav'
import Card from "./components/Card"

function App() {
  const items = data.map(item =>{
      return <Card 
                key={item.id}
                {...item}/>
    }
  )
  return (
    <>
      <Topnav />
      <div className="all-cards">{items}</div>
    </>
  )
}

export default App
