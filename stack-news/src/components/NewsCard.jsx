import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
   
    const {author, image_url, title, details} = news;

    //  : details;
    
    return (
        <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-2">
        <div className="relative">
          <img className="w-full h-56 object-cover" src={image_url} alt="News Image" />
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 6h14a2 2 0 0 1 2 2v14l-7-3-7 3V8a2 2 0 0 1 2-2z" />
            </svg>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="font-semibold text-lg text-gray-800 mb-2">{title}</div>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <div className="mr-2">{author.name}</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-600" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16 3c-1.05 0-2.05.158-3 .45-1.614-.958-3.466-1.5-5.5-1.5-2.034 0-3.886.542-5.5 1.5-.945-.292-1.945-.45-3-.45A1 1 0 0 0 0 4v16a1 1 0 0 0 1.276.96c1.42.433 2.95.84 4.535 1.2 1.532.35 3.09.67 4.689.946C11.157 23.573 12.557 24 14 24s2.843-.427 4.5-.894c1.6-.276 3.158-.595 4.69-.946C20.05 21.8 21.58 21.393 23 20.96 23.66 20.73 24 20.173 24 20V4c0-.55-.45-1-1-1h-7zM14 22c-1.172 0-2.28-.198-3.313-.558-1.491-.343-3.027-.752-4.656-1.2C5.525 19.77 4.254 19.3 3 18.72V5.28c1.325.61 2.837 1.126 4.5 1.548 1.758-.463 3.53-.791 5.313-1.02.33-.038.66-.058 1-.058s.67.02 1 .058c1.782.229 3.555.557 5.313 1.02 1.663-.422 3.175-.938 4.5-1.548v13.44c-1.254.58-2.525 1.05-3.688 1.422C16.28 21.802 15.172 22 14 22zm-7-6.002c0-1.658 1.343-3 3-3s3 1.342 3 3-1.343 3-3 3-3-1.342-3-3z"/>
            </svg>
          </div>
          

          
            <div>
                 {
                    details.length > 300 ? <p> {details.slice(0, 280) + ' . . .' }  </p> : <p>{details}</p>
                 }
                  <Link to={`/news/${news._id}`} className=" text-orange-600 font-semibold ">Read more</Link> 
            </div>
           
           
          

        </div>
      </div>
      
    );
};

export default NewsCard;