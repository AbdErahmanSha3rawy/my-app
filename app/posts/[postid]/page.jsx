// 1. ضفنا كلمة async قبل الدالة

export const instant = false;
const postDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const postid = resolvedParams.postid;


    let post = null;
  let error = null;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
        throw new Error('فشل في جلب البيانات من الخادم');
    }
    
    post = await response.json();
  } catch (err) {
    error = err.message;
    console.error("Fetch Error:", err);
  }
  
  return (
    <div style={{ background: "black" }}>
      {/* باقي كود التصميم بتاعك */}
      <h1>{post?.body}</h1>
    </div>
  );
};

export default postDetailsPage;