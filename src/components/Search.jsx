export default function Search({ getRandomUser, getAllUser}) {
    return (
        <div className="search">
            <input onClick={getRandomUser} className="search-number" type="button" value="Get Random User" />
            <input onClick={getAllUser} className="search-number" type="button" value="Get All User" />
        </div>
    )
}