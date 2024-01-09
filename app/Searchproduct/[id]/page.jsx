import Searchpage from "@/components/Searchpage";
import Scrapeandstore from "@/lib/actions";


const Spage = async({params})=>{

    let url =decodeURIComponent(params.id)
    let mainurl = 'https://www.amazon.in/s?k='+(url.slice(-1)=='+'?url.slice(0,-1):url)
    const data = await Scrapeandstore(mainurl)
    
    return(

        <Searchpage id={data}/>
    
    );
}
export default Spage;