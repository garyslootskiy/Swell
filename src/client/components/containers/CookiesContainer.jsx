import React from 'react';
import CookieContainer from './CookieContainer'
import EmptyState from '../display/EmptyState'

export default function CookiesContainer({ currentResponse }) {

  if (!currentResponse.response) {
    return (
      <EmptyState />
    )
  } 
  
  const responseCookies = currentResponse.response.cookies.map((cookie, index) => {

    return (
       <CookieContainer className="cookies-container" key={index} cookie={cookie} />
    )
  }) 

  return (
  <div className='mx-3'>
      {responseCookies}
    </div>
  )
}