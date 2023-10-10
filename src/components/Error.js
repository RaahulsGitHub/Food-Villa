import { useRouteError } from "react-router-dom";

const Error = ()=>{

    const {status, statusText} = useRouteError();
    

    return(
        <>
            <h1> Opps!!!</h1>
            <h3>Something went Wrong!!!</h3>
            <h4>{status+" "} {statusText}</h4>
        </>
    )
}

export default Error;