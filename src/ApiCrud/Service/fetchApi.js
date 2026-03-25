const API_URL = "http://localhost:3000/users";

//  GET API : Read data
export const getUsersfetchApi = async () => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return await res.json();
  } catch (error) {
    console.error("GET Error:", error);
    return [];
  }
};

//  POST API : Create user
export const AddUsersfetchApi = async (user) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("Failed to add user");
    }

    return await res.json();
  } catch (error) {
    console.error("POST Error:", error);
  }
};

//  PUT API : Update user
export const updateUsersfetchApi = async (id, user) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("Failed to update user");
    }

    return await res.json();
  } catch (error) {
    console.error("PUT Error:", error);
  }
};

//  DELETE API : Delete user
export const deleteUserfetchApi = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete user");
    }

    return true;
  } catch (error) {
    console.error("DELETE Error:", error);
  }
};