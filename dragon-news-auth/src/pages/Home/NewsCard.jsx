import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    console.log(news);
    const {name, published_date, img} = news.author;
    const {title, image_url, thumbnail_url, details, _id} = news;
 
    return (
        <div className="card m-2 border p-3 ">

           <section className="flex gap-4 items-center p-3 bg-slate-900 rounded ">
                <div className="w-10 rounded-lg">
                    <img className=" rounded-full" src={img} alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{published_date}</p>
                </div>
           </section>

           <main>

                <h1 className="text-2xl">{title}</h1>
                
                <img className="mx-auto " src={image_url} alt="" />

                {/* <p>{details}</p> */}
                {
                    details.length > 200 ? 
                    // <p className="p-2">{details.slice(0, 180)}  <Link  className="font-bold text-blue-600"
                   // Read more.....</Link></p>
                   
                   <p>{details.slice(0, 180)}
                   <Link to={`/news/${_id}`}  className="bold text-blue-600"> Read more...</Link>
                   </p>
                   
                   :
                  

                    <p>
                        {details}
                    </p>
                }

           </main>
            
        </div>
    );
};

export default NewsCard;