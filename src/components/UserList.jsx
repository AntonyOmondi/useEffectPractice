import UserCard from './UserCard'
import Search from './Search'

export default function UserList({ users, getRandomUser, getAllUser}) {

    return (
        <>
            <Search getRandomUser={getRandomUser} getAllUser={getAllUser} />
            <div className="user-list">
                {users.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </>
    )
}
