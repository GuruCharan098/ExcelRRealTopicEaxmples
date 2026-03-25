const UserForm = ({ form, handleChanges, handleSubmit, editId }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChanges}
          placeholder="Enter your Name..."
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChanges}
          placeholder="Enter your Email..."
          required
        />

        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default UserForm;