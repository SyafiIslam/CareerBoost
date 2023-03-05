import React from 'react'
import { useParams } from 'react-router-dom'
import DataPribadi from '../components/mentor/DataPribadi'
import Pengalaman from '../components/mentor/Pengalaman'

const MentorSection = () => {
  const id= useParams()

  return (
    <>
    <p>
      {id.id}
    </p>
      {id == 1 ? <DataPribadi /> : <Pengalaman />}
    </>
  )
}

export default MentorSection