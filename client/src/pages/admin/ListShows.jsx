import React from 'react'

const ListShows = () => {

    const currency = import.meta.env.VITE_CURRENCY
        const [Shows, setShows] = useState([]);
        const [loading, setLoading] =useStare (true);

        const getAllShows = async () =>{
            try {

                setShows([{
                    movie: dummyShowData[0],
                    showdateTime: "2025-06-30T02:30:00.000Z"
                    showPrice :59,
                    occupiedSeats:{
                        A1: "USER_1",
                        B1: "USER_2",
                        C1: "USER_3"
                    }
                }]);
                setLoading(false);
            } catch (error){


                console.error(error);
            }
        }

        useEffect(() => {
            getAllShows();

        } ,[]);
    
    return !loading ?(
        <>
           <title text1="List" text2="Shows"/>
           <div className="max-w-4xl mt-6 overflow-x-auto">
            <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
                <thead >
                    <tr className="bg-primary/20 text-left text-white">
                    <th className="p-2 font-medium pl-5">Movie Name</th>
                    <th className="p-2 font-medium">Show Time</th>
                    <th className="p-2 font-medium">Total Bookings</th>
                    <th className="p-2 font-medium">Earnings</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-light">
                    {Shows.map((show,index) => (
                 <tr key={index} className="border-b border-primary/10 bg-primary/5 even:bg-primary/10">
                    <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                    <td className="p-2">{dateFormat(show.showDateTime)}</td>
                    <td className="p-2">{Object.keys(show.occupiedSeats).length}</td>
                    <td className="p-2">{currency} {Object.keys(show.occupiedSeats).length *show.showPrice}</td>
                 </tr>

                    ))}
                </tbody>
            </table>
           </div>
        </>
        
    ) : <loading/>
}
 export default ListShows