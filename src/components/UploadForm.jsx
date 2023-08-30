import { useState } from 'react'
import { ProgressBar } from './ProgressBar'

export const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState('')

    const types = ['image/png', 'image/jpeg']

    const onChange = e => {
        const selectedFile = e.target.files[0]
        if (selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile)
            setError('')
        } else {
            setError('Please select an image file (pmg, jpeg)')
            setFile(null)
        }
    }

    return (
        <form>
            <div className='input'>
                <input id='file' type='file' onChange={onChange} />
                <label htmlFor='file'>+</label>
            </div>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
