'use client'
import Product from '@/components/Product';
import { useAppSelector } from '@/lib/redux/store';
import Navbar from '@/components/Navbarp';

const Ipage = ({params})=>{
    
    const data = useAppSelector((state)=>state.datareducer.value)
    const product = data[params.id]
    return(
        <div className='flex flex-col items-center justify-center' >
             <Navbar/>
            
            <Product data={product}/>
        </div>
    );
}
export default Ipage;