import React, { useEffect, useState } from "react";

function Loders() {
  const [post, setPost] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((response) => {
        const { body } = response;
        setPost(body);
      });
  }, []);

  return <>{post ? post : "Loading...."}</>;
}

export default Loders;
