import React from 'react'
import { apiUrl } from '../../constants'
import useFetch from '../../hooks/useFetch'
import LoadingMsg from '../loading-msg/LoadingMsg'
import "./EpisodesPage.scss"

const EpisodesPage = () => {
  const {data:episodes, isLoading}  = useFetch(apiUrl,`episode`)

  return ( 

  
      <table className='table-container'>
         {isLoading && <LoadingMsg/>}
      <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Episode</th>
            </tr>
          </thead>
      {episodes?.results === undefined && !isLoading && <p>Something went wrong</p>}
      {episodes?.results?.map(episode=>{
        return <tbody key={episode.id} >
            <tr >
              <td >{episode.id}</td>
              <td>{episode.name}</td>
              <td>{episode.episode}</td>
            </tr>
          </tbody>
      })}
       </table>

      )
    }


export default EpisodesPage