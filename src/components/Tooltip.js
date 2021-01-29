import React from 'react';
import Hover from './Hover';
function tooltip ({text,children}) {

    const styles = {
        container: {
          position: 'relative',
          display: 'flex'
        },
        tooltip: {
          boxSizing: 'border-box',
          position: 'absolute',
          width: '160px',
          bottom: '100%',
          left: '50%',
          marginLeft: '-80px',
          borderRadius: '3px',
          backgroundColor:'#2b2d42',
          padding: '7px',
          marginBottom: '5px',
          color: '#fff',
          textAlign: 'center',
          fontSize: '14px',
        }
      }
    return(
        <Hover>
           {(hovering) => (
               <div style={styles.container}>
                   {hovering === true &&<div style={styles.tooltip}>{text}</div>}
                   {children}
               </div>
           )} 
        </Hover>
    )
}
export default tooltip;