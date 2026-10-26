import React from 'react'
import User from '../../components/user';
import { Suspense } from 'react';

export const instant = false;

const Page = async ({ params }) => {
    const { userid } = await params;
   
    const loading =(
        <div>
        <h1>loading...</h1>
        </div>
    )
 
    return (

<Suspense fallback={loading}>
     <User userid={userid}/>
</Suspense>

    )
}

export default Page