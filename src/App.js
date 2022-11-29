import Object from "./data.json";
import Comments from "./Comments";
import SendComment from "./SendComment";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState(Object.comments);

  return (
    <>
      <Comments Object={comments} setObject={setComments} />
      <SendComment Object={comments} setObject={setComments} />
    </>
  );
}

export default App;
