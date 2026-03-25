function UserTable({ users, onEdit, onDelete }) {
  return (
    <>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users && users.length > 0 ? (
            users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => onEdit(item)}>Edit</button>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Users Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;