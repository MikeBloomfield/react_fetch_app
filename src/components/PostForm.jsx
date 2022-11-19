import React, {useState} from 'react';
import MyButton from './UI/Button/MyButton'
import MyInput from './UI//MyInput/MyInput'


const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "", })


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: "", body: "", })
  } 
    return (
        <form action="">
            {/* управляемый компонент */}
            <MyInput
                type="text" placeholder='Название поста'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })} />
            {/* неуправляемый компонент */}
            <MyInput type="text" placeholder='Описание поста' value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
    
}

export default PostForm