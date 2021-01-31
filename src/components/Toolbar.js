import React from 'react';
import {FaLightbulb, FaMoon} from 'react-icons/fa'
import './Toolbar.css';
function Toolbar ({theme,toggleTheme,input,setInput}) {
    return(
        <div className={`toolbar toolbar-${theme}`}>
        <nav>
          <h1 className={`h-${theme}`}>Records</h1>
          <div>
            <input  className= {`inpt-${theme}`} placeholder="Search by first or last name" 
            value={input}
             onChange={(event) => setInput(event.target.value)}/>
          </div>

          {theme === 'light' ?<FaMoon color="white" size={28} onClick={toggleTheme} style={{cursor:'pointer'}}/>:
          <FaLightbulb color="white" size={28} onClick={toggleTheme} style={{cursor:'pointer'}} />
          }
          
        </nav>
      </div>
    )
}
export default Toolbar;