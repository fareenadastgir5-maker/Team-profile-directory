

function UserCards({ users }) {


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {users.map((user, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '200px' }}>
            <h2 style={{ margin: '0 0 10px 0' }}>{user.name}</h2>
            <p style={{ margin: '5px 0' }}>{user.email}</p>
             <p style={{ margin: '5px 0' }}>{user.phone}</p>
              <p style={{ margin: '5px 0' }}>{user.address}</p>
               <p style={{ margin: '5px 0' }}>{user.role}</p>
          </div>
        ))}
    </div>
  )
}

export default UserCards
