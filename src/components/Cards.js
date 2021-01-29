import React from 'react'
import './Card.css'
import {FaPhoneAlt,FaGlobe,FaCcVisa, FaLock, FaInternetExplorer, FaUserAlt, FaEnvelope, FaAddressCard, 
  FaMale, FaFemale, FaCcPaypal, FaMoneyCheck, FaMapMarker, FaMapMarked, FaCcMastercard} from 'react-icons/fa'
import Tooltip from './Tooltip'


export default function Cards({loading,theme,profiles,error}) {
  const iconColor = "#d90429"
  const iconSize = 20

  
    return (
        <div>
        {loading && <p>Loading...</p>}
        {error && <p>Sorry we couldn't complete your request.</p>}
        <div>
        <ul className="cardList">
        {profiles.map((profile) => {
          const{FirstName,LastName,PhoneNumber,Longitude,Latitude,CreditCardNumber,CreditCardType,DomainName,
          Email,MacAddress,URL,UserName,Gender,PaymentMethod} = profile;
        
          return(
  
              <li>
              <div className={`card bg-${theme}`}>

                <div className="avatar-container" >
                <div className="avatar">{FirstName.charAt(0) + LastName.charAt(0)}</div>
                </div>
              <h3 className={`h3-${theme}`}>{FirstName + ' ' + LastName}</h3>
              <ul className="section">
                <li>
                  <Tooltip text="Phone Number">
                  <FaPhoneAlt color={iconColor} size={iconSize}/>
                  <p>{PhoneNumber}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Longitude">
                  <FaMapMarker color={iconColor} size={iconSize}/>
                 <p>{Longitude}</p> 
                 </Tooltip>
                </li>
                <li>
                  <Tooltip text="Latitude">
                  <FaMapMarked color={iconColor} size={iconSize}/>
                  <p>{Latitude}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Credit Card Number">
                  <FaLock color={iconColor} size={iconSize}/>
                  <p>{CreditCardNumber}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Credit Card Type">
                  {CreditCardType === 'MasterCard'? <FaCcMastercard color={iconColor} size={iconSize}/>:
                   <FaCcVisa color={iconColor} size={iconSize}/>
                  }
                 <p>{CreditCardType}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Domain Name">
                  <FaInternetExplorer color={iconColor} size={iconSize}/>
                  <p>{DomainName}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Email">
                  <FaEnvelope color={iconColor} size={iconSize}/>
                  <p>{Email}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Mac Address">
                  <FaAddressCard color={iconColor} size={iconSize} />
                  <p>{MacAddress}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="URL">
                  <FaGlobe color={iconColor} size={iconSize}/>
                  <p>{URL.substring(0,22)}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Username">
                  <FaUserAlt color={iconColor} size={iconSize}/>
                  <p>{UserName}</p>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip text="Gender">
                  {Gender === "Male" ? <FaMale color={iconColor} size={iconSize}/>:
                  <FaFemale color={iconColor} size={iconSize}/>}
                  <p>{Gender}</p>
                  </Tooltip> 
                </li>
                <li>
                  <Tooltip text="Payment Method">
                  {PaymentMethod === "paypal" ? <FaCcPaypal color={iconColor} size={iconSize}/>:
                  <FaMoneyCheck color={iconColor} size={iconSize}/>
                  }
                  <p>{PaymentMethod}</p>
                  </Tooltip>
                 
                </li>
              </ul>
              </div>
              
             </li>
            )
              
        })}
        </ul>
        </div>
        
        </div>
    )
}
