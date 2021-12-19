// Module imports
import { useState } from 'react'


const Events = () => {
  // useState
  const [ title, setTitle ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ date, setDate ] = useState('')
  const [ description, setDescription ] = useState('')

  return (
    <div className='events'>
      <h1>Events</h1>
      <div className='list'>LIST</div>
      <div></div>
      <form>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <label htmlFor='title'>Location:</label>
        <input type='text' name='title' value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
        <label htmlFor='date'>Date:</label>
        <input type='date' name='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
        <label htmlFor='description'>Description:</label>
        <textarea className='eventDescription' rows='10' cols='30' name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type='submit' value='Add event'/>
      </form>
    </div>
  )
}

export default Events