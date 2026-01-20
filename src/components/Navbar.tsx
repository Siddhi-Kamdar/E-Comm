const Navbar = () => {
 const handleSearch = (event: any) => {
   if (event.key === 'Enter') {
     alert(`Search query: ${event.target.value}`);
   }
 };
 return (
   <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#333', color: '#fff' }}>
     <div>Ecomm</div>
     <div>
       <input
         type="text"
         placeholder="Search..."
         onKeyPress={handleSearch}
         style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
       />
     </div>
   </nav>
 );
};
export default Navbar;