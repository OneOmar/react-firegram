import { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([])

    // https://firebase.google.com/docs/firestore/query-data/listen

    useEffect(() => {
        const collectionRef = collection(firestore, collectionName)
        const q = query(collectionRef, orderBy('createAt', 'desc'))

        const unsub = onSnapshot(q, (snap) => {
            const documents = []
            snap.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id })
            })
            setDocs(documents)
        })

        return () => unsub()
        // this is a cleanup function that react will run when
        // a component using the hook unmounts

    }, [collectionName])

    return { docs }
}

export default useFirestore
