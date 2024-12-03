import React from 'react'

function CvPreview({generalInfo}) {
 
  return (
    <div>
     <div>
        <p>Basic Info</p>
        <p>{generalInfo.name}</p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phoneNumber}</p>
        </div>   
    </div>
  )
}

export default CvPreview