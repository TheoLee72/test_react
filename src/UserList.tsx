function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={()=>{onRemove(user.id);}}>삭제</button>
    </div>
  );
}

function UserList({users, onRemove}) {

  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} onRemove={onRemove}></User>
      ))}
    </div>
  );
}

export default UserList;