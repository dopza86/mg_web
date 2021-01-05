// import React, { useState } from "react";

// import api from "../../api";
// import CommentPresenter from "../CommentPresenter";

// export default ({ token }) => {
//   const [comment, setComment] = useState("");
//   const isFormValid = () => {
//     if (comment === "") {
//       alert("댓글을 입력 해주세요");
//       return false;
//     }

//     return true;
//   };
//   const addComment = async () => {
//     if (!isFormValid()) {
//       return;
//     }
//     const form = {
//       text: comment,
//     };

//     try {
//       const { status } = await api.goComment(1, form, token);

//       if (status === 201) {
//         alert("댓글이 등록되었습니다");
//         setComment("");
//       }
//     } catch (e) {
//       console.warn(e);
//     }
//   };

//   return (
//     <CommentPresenter
//       comment={comment}
//       setComment={setComment}
//       addComment={addComment}
//     />
//   );
// };
