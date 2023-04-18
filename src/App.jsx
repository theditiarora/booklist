import './App.css'
import { list } from './List'
import { pendingList} from './WantToRead'
function App() {

  return (
    <div className="p-5 h-screen w-screen bg-[url(./soft-gradient.png)]">
      <h1 className='text-lg'>All the books i've read.</h1> 

      <div className='mt-5'>
      {list.map(book => {
        return(
          <p className='mt-2 text-[#404040]'> - {book}</p>
        )
      })}
      </div>

      <div className='absolute top-5 right-5 border-black border rounded-md p-5 shadow-md'>
      <h1 className='mb-5'>Next book - </h1>

        {pendingList.map(book => {
          return(
              <p> - {book}</p>
          )
        })}
      </div>
    </div>
  )
}

export default App
