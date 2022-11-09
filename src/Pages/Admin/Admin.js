import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar'
import CountCard from '../../Components/Cards/CountCard'
import Top5Post from '../../Components/TopPosts/Top5Post'
import Top5User from '../../Components/TopUsers/Top5User'

function Admin() {
  return (
    <div>
      <AdminNavbar />
      <div className='cards'>
      <div style={{marginLeft:'20%',padding:'3rem', display:'flex', gap:100 ,overflow:'scroll'}}>
        <CountCard/>
       
        </div>
        <Top5User />
        <Top5Post />
      </div>
    </div>
  )
}

export default Admin