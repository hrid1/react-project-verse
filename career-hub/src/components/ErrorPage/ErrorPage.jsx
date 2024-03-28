import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

            <h2 className="text-center text-red-500 text-4xl font-bold mt-5">Opps !!!</h2>

            <Link to="/">Go back to home</Link>
            
        </div>
    );
};

export default ErrorPage;