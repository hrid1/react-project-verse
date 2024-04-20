import { useEffect, useState } from "react";
import { Link, NavLink} from "react-router-dom";




const LeftsideNav = () => {

    const [news, setNews] = useState([]);
    useEffect( () => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setNews(data));
    } ,[])

    return (
        <div>
            <h3 className="text-2xl font-bold p-2">All Category</h3>

            <div>


                {/* {
                    news.map( category => <p className="bg-gray-300 p-3 rounded border-b" key={category.id}> <Link>{category.name}</Link></p>)
                } */}


                {
                    news.map (category => (
                        <NavLink key={category.id} to={category.id}>
                            <h2 className="  font-bold rounded border-b p-4">
                                {category.name}
                            </h2>
                        </NavLink>
                    ))
                }


           
             
             
             
                
            </div>
        </div>
    );
};

export default LeftsideNav;