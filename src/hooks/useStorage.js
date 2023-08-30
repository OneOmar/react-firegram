import { useState, useEffect } from 'react'
import { storage, firestore } from '../firebase/config'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {

        // Create the references
        const storageRef = ref(storage, file.name)
        const collectionRef = collection(firestore, 'images')

        // Upload the file
        // const uploadTask = uploadBytes(storageRef, file)

        // Upload the file and metadata
        const uploadTask = uploadBytesResumable(storageRef, file)

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', (snap) => {
            // Observe state change events such as progress, pause, and resume...
            let percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
            setProgress(percentage)
        }, (err) => {
            // Handle unsuccessful uploads
            setError(err)
        }, async () => {
            // Handle successful uploads
            const url = await getDownloadURL(uploadTask.snapshot.ref)
            setUrl(url)
            addDoc(collectionRef, {
                createAt: serverTimestamp(),
                url
            })
        })

        console.log('re-rendered')

    }, [file])

    return { progress, url, error }
}

export default useStorage
