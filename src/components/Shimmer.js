const Shimmer = ()=>{
    return <>
        <div className="restaurant-list">
            {Array(10).fill("").map((e,index)=>(

                <div key={index}>
                <div  className="shimmer-container1">

                </div>
                <div className="shimmer-container2">

                </div>
            </div>
            ))}
        </div>
    </>
}

export default Shimmer;