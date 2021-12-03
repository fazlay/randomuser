import React from 'react'
import'../App.css'

const SingleUser = ({user}) => {
    const {gender,name}=user
    return (
        <>
      
  <div class="card">
    <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"/>


  </div>
 
  


        </>
    )
}

export default SingleUser
