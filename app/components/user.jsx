"use client";
import { useState, useEffect } from 'react';

const User = ({ userid }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchUser = async () => {
            try {
                setError(null);
                setLoading(true);

                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`, {
         
                    next:{
                 revalidate:60
                  }
                });

                if (!response.ok) {
                    throw new Error('فشل في جلب البيانات من الخادم');
                }

                const result = await response.json();
                setUser(result);
            } catch (err) {
                setError(err.message);
                console.error("Fetch Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

    }, [userid]); 
    if (loading) {
        return <div>جاري التحميل...</div>;
    }

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error}</p>
            </div>
        );
    }

    if (!user) {
        return <div>المستخدم غير موجود...</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <h1>userName : {user.name}</h1>
        </div>
    );
}

export default User;