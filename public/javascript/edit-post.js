async function editFormHandler(event) {
  event.preventDefault();

  await fetch("/api/post/${id}", {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "applicaton/json",
    },
  });
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
