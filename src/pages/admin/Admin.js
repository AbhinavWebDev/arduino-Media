import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import CountCard from '../../components/Cards/CountCard'
import Top5Post from '../../components/Demo Test/Top5Post'
import Top5User from '../../components/Demo Test/Top5User'

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