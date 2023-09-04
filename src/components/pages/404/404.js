import ErrorMessage from "../../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

import "./404.scss";

const Page404 = () => {
    return(
        <div>
            <ErrorMessage/>
            <p className="page404_text">Page doesn't exist</p>
            <Link className="page404_link" to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;