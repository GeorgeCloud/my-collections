function SearchBusiness(){
    return (
        <div>
            <input
                className='searchBusinessInput'
                placeholder='tacos, cheap dinner, target'
                required
            />
            <button
            className='searchButton'
            onClick={() => console.log('clicked')}>
                Search
                {/* <img src='https://cdn-icons-png.flaticon.com/512/1086/1086916.png'></img> */}
            </button>
        </div>
    )
}

export default SearchBusiness;
