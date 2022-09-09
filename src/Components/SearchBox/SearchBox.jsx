import "./SearchBox.css";

const SearchBox = () => {
    return ( 
        <div className="search-box">
            <input type="text" placeholder="Search by Location"/>
            <input type="text" placeholder="Type Property"/>
            <input type="text" placeholder="Price Range"/>
            <button>SEARCH</button>
        </div>
     );
}
 
export default SearchBox;