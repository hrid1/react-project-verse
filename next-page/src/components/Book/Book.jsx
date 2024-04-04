


const Book = ({book}) => {

    const {title, subtitle, image, price, } = book ;

    return (
        <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-md hover:shadow-2xl">
            <img src={image} alt="" className="object-cover mx-auto" />

            {/* info div */}
            <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col">
                <p>{title}</p>
                <br />
                <p>{subtitle.substring(0, 45)}...</p>
                <br />
                <p className="mt-auto">Price: {price}</p>
            </div>
        </div>
    );
};

export default Book;