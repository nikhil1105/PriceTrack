import Searchpage from "@/components/Searchpage";
import Scrapeandstore from "@/lib/actions";
import Navbar from '@/components/Navbarp';


const Spage = async({params})=>{

    
    const data = await Scrapeandstore(params.id)
    
    return(
        <>
        <Navbar/>
        <Searchpage id={data}/>
        </>
    );
}
export default Spage;