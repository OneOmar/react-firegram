import { useState } from 'react'
import { ImageGrid } from './components/ImageGrid'
import Modal from './components/Modal'
import Title from './components/Title'
import { UploadForm } from './components/UploadForm'

function App() {

  const [selctedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selctedImg && <Modal selectedImg={selctedImg} setSelectedImg={setSelectedImg} />}
    </div>
  )
}

export default App
