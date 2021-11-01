const URL = "https://jsonplaceholder.typicode.com";

const getPost = async () => {
  try {
    const response = await fetch(`${URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

const addPost = async (body) => {
  try {
    const response = await fetch(`${URL}/posts`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

const editPost = async (id, body) => {
  try {
    const response = await fetch(`${URL}/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

const deletePost = async (id) => {  
  try {
    const response = await fetch(`${URL}/posts/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

export default { getPost, addPost, editPost, deletePost };
