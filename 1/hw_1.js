import React from 'react';

//Создать компонент Message, отображающий переданный ему props текст.

function Message({text}) {
  return (
    <>
      <h3 className="propsText">Это тектс из пропс - <span className='text'>{text}</span></h3>
    </>

    );
}

export default Message;