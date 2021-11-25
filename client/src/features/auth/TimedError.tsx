import React, {useState,useEffect} from 'react'

function TimedError({errorMessage} : {errorMessage:string}) {
    const [visible, setVisible] = useState(false)
   useEffect(() => {
     if(!errorMessage){
      setVisible(false)
      return
     }
     setVisible(true)
     const timer = setTimeout(() => {
       setVisible(false)
     }, 3000);
     return () => clearTimeout(timer);
   }, [errorMessage]) 
   if(!visible) return null
    return (
        <div className="error-message">
            <strong> <i className="fas fa-exclamation-triangle"></i> ERROR </strong>
            <p>{errorMessage}</p>
        </div>
    )
}

export default TimedError
