'use client'
import Product from '@/components/Product';
import { useAppSelector } from '@/lib/redux/store';

const Ipage = ({params})=>{
    
    const data = useAppSelector((state)=>state.datareducer.value)
    const product = data[params.id]
    return(
        <div>
            <Product data={product}/>
        </div>
    );
}
export default Ipage;