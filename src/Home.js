import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

const { data:blogs, Isloading, error} = useFetch( "http://localhost:8000/blogs")

    return ( 
        <div className="home">
            {error &&  <div> {error}</div>}
            {Isloading && <div> Loading...</div>}
            { blogs && <Bloglist blogs={blogs} title="All Blogs"  />}
        </div>
     ); 
}
 
export default Home;