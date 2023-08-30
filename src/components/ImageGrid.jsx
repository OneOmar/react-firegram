import useFirestore from '../hooks/useFirestore'

// eslint-disable-next-line react/prop-types
export const ImageGrid = ({ setSelectedImg }) => {

    const { docs } = useFirestore('images')
    // console.log(docs)

    return (
        <div className='img-grid'>
            {docs && docs.map(doc =>
                <div className='img-wrap'
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt='uploaded pic' />
                </div>
            )}
        </div>
    )
}
