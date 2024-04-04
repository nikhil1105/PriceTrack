'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getallproducts } from '@/lib/actions';

function Cart() {
  const { data: session, status } = useSession();
  const [data, setData] = useState<any>(); 
    console.log(session,status);
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session?.user?.email) {
          const result = await getallproducts(session.user.email);
          console.log(result);
          
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching data from server:', error);
      }
    };

    if (status === 'authenticated') {
      fetchData();
    }
  }, [session,status]); 

  console.log(data);

  return <div>Cart hi</div>; 
}

export default Cart;
