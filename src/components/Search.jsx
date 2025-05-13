export default function Search({ getRandomUser }) {
    return (
        <div className="search">
            <input onClick={getRandomUser} className="search-number" type="button" value="Get Random User" />
            <input className="search-number" type="button" value="Get All User" />
        </div>
    )
}