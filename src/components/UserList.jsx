import UserCard from './UserCard'
import Search from './Search'

export default function UserList({ users, getRandomUser }) {

    return (
        <>
            <Search getRandomUser={getRandomUser} />
            <div className="user-list">
                {users.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </>
    )
}
