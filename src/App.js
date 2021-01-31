import './App.css'
import {useState, useEffect} from 'react'
import Cards from './components/Cards';
import Pagination from './components/Pagination'
import Toolbar from './components/Toolbar';

function App() {
  const [profiles,setProfiles] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null);
  const [currentPage,setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20)
  const [input,setInput] = useState('')
  const [theme,setTheme] = useState('light');
  
  const getProfile = async () => {
    setLoading(true)
    try{
      const res = await fetch("https://api.enye.tech/v1/challenge/records")
      const record = await res.json()
      setLoading(false)
      const {records:{profiles}}  = record;
      setProfiles(profiles);
    }
    catch (err){
        setLoading(false);
        setError(err)
        console.warn(err)
    }
  
  }

  useEffect (() => {

    getProfile()

  },[])

  const indexofLastCard = currentPage * cardsPerPage;
  const indexofFirstCard = indexofLastCard - cardsPerPage;
  const cardsToshow = profiles.slice(indexofFirstCard,indexofLastCard) 
  const filteredArray = input === ''? cardsToshow:
  profiles.filter(el=>el.FirstName.toLowerCase().includes(input.toLowerCase()) || 
  el.LastName.toLowerCase().includes(input.toLowerCase()));
  const paginate = number => setCurrentPage(number)
  
  const toggleTheme = () => {
   setTheme(theme => theme === 'light'?'dark':'light')
   console.log('clicked');
   console.log(theme)
  }
  return (
         
        <div className={`app app-${theme}`}>
        <Toolbar toggleTheme={toggleTheme} input={input} setInput={setInput} theme={theme}/>
      <Cards loading={loading} error={error} profiles = {filteredArray} theme={theme}/>
      {input === "" && <Pagination paginate={paginate} totalCards={profiles.length} cardsPerPage={cardsPerPage}/>}
    </div>
    
  );
}

export default App;
