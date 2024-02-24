
import Card from '../components/Card'
import FilterCombo from '../components/common/FilterCombo'
import Navbar from '../components/common/Navbar'

const Community = () => {
 
  return (
   <>
    <Navbar/>
    {/* Filter section */}
    <div className="p-10">
    <h1 className="text-xl font-bold">Filter By</h1>
  <br />
    <FilterCombo options={['All','Latest']} onSelect={(value) => console.log(value)} />
    
    <div className='my-10 flex flex-wrap gap-10'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>  
    </div>
   </>
  )
}

export default Community