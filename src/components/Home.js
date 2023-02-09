import '../styles/Home.css'

function Home(){
    return (
        <div>
            <h1>Yelp</h1>
            <input placeholder='tacos, cheap dinner, target'></input>

            <div className="apiResults">
                <div className="single-result">
                    <h3>Target</h3>
                </div>
            </div>
        </div>
    )
}

export default Home