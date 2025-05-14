import React, { useState } from 'react';
//Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
    ]);
    function delCom(idDel) {
      setComments(comments.filter(comment => comment.id !== idDel));
    }

  return (
    <ul>
      <h2>Список комментариев</h2>
      {comments.map((comment) => <li>{comment.text}
        <button className='btn' onClick={() => delCom(comment.id)
          }>Удалить комментарий</button>
      </li>)}
    </ul>
   );
}

export default CommentsList;