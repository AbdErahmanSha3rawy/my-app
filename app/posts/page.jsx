import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Posts Page',
  description: 'This is the posts page',
};

export const instant = false;

const PostsPage = async () => {
  let posts = null;
  let error = null;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store'
    });
    
    if (!response.ok) {
        throw new Error('فشل في جلب البيانات من الخادم');
    }
    
    posts = await response.json();
  } catch (err) {
    error = err.message;
    console.error("Fetch Error:", err);
  }
  
  return (
    <div>
      <h1>Posts page</h1>
      
      {error ? (
          <h2 style={{ color: 'red' }}>عذراً، حدثت مشكلة في الاتصال بالشبكة. يرجى المحاولة لاحقاً.</h2>
      ) : (
        posts?.map((post) => (
          <Link href={`/posts/${post.id}`}>
           <div key={post.id} style={{
            width:"100%",
            background:"white",
            padding:"10px",
           color:"black"            
          }}>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
          </div>
          
          </Link>
         
        ))
      )}
    </div>
  );
};

export default PostsPage;