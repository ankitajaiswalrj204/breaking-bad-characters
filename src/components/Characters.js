import React,{useState} from "react";
import ReactPaginate from "react-paginate";
import Character from "./Character";


const Characters=(props)=>{
    const{data}=props;
   
    const [PageNumber,setPageNumber]=useState(0);

    const usersPerPage=10;
    const pagesVisited=PageNumber*usersPerPage;
  
    const pageCount=Math.ceil(data.length/usersPerPage);
    const changePage=({selected})=>{
        setPageNumber(selected);

    }
  
    return (
        <>
            <div className="row">
        
                
                {
                    data.slice(pagesVisited,pagesVisited+usersPerPage).map(item => {
                        return <div className="col-md-3 " key={item.char_id}><Character item={item} /></div>
                    })

                }
                
                
                
            </div>
            <div className="col-md-12">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagnitionBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"pagnitionDisabled"}
                    activeClassName={"paginationActive"}
                    
                    />
            </div>

        </>
            
            
    )
}
export default Characters;