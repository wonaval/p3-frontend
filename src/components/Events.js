// Module imports
import { useState, useEffect, useContext } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

// useContext import
import { UserContext } from '../context/UserContext'


const Events = () => {
  // useContext
  const { userState } = useContext(UserContext)
  const [ user, setUser ] = userState

  // useState
  const [ title, setTitle ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ date, setDate ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ events, setEvents ] = useState([])

  // useEffect - On load
  useEffect(()=>{
    getEvents()
  }, [])

  // Component functions
  // Get events from backend
  const getEvents = () => {
    const userId = localStorage.getItem('dashboard-token')
    if (userId) {
      try {
      const userId = localStorage.getItem('dashboard-token')
      axios.get(`${env.REACT_APP_BACKEND_URL}/event`, {headers: {Authorization: userId}})
        .then((response)=>{setEvents([...response.data.event]); console.log('Event response', response.data)})
    } catch (error) {console.log(error)}}
  }
  
  // Event submission
  const submitEvent = (e) => {
    try {
      e.preventDefault()
      axios({url: `${env.REACT_APP_BACKEND_URL}/event`, method: 'POST', headers: {Authorization: user.id}, data: {title: title, location: location, date: date, description: description}})
        .then((response)=>{getEvents(); clearForm()})}
    catch (error) {
      console.log(error)
    }
  }

  // Event delete
  const deleteEvent= (eventId) => {
    try {
      axios({url: `${env.REACT_APP_BACKEND_URL}/event/${eventId}`, method: 'DELETE', headers: {Authorization: user.id}})
        .then((response)=>{getEvents()})
    } catch (error) {
      console.log(error)
    }
  }

  // Clear form
  const clearForm = () => {
    setTitle('')
    setLocation('')
    setDate('')
    setDescription('')
  }

  // Convert datetime
  const convertDate = (date) => {
    const newDate = new Date(date)
    return date
  }

  return (
    <div className='events'>
      <h2>Upcoming Events/Tasks</h2>
      <div className='list'>
        <div>
          { events && events.map((event, i)=>{
            return (
              <div key={i}>
              <div className='eventTitle'><h3>{event.title}</h3></div>
                <div className='eventDetails'>
                  { event.location ? <span>at {event.location}</span> : null }
                  { event.date ? <span> on {convertDate(event.date)}</span> : null }
                </div>
                <div className='eventDescription'>{event.description}</div>
                <div><span className='deleteEvent' onClick={(e)=>{deleteEvent(event.id)}}>X</span></div>
              </div>
            )})}
        </div>
      </div>
      <div><h3>Add Events</h3></div>
      <div className='eventForm'>
        <form onSubmit={submitEvent}>
            <label htmlFor='title'>Title: *</label>
            <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <label htmlFor='title'>Location:</label>
            <input type='text' name='title' value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
            <label htmlFor='date'>Date:</label>
            <input type='datetime-local' name='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            <label htmlFor='description'>Description:</label>
            <textarea className='eventDescription' rows='10' cols='30' name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <div>* required fields</div>
            <input type='submit' value='Add event'/>
        </form>
      </div>
    </div>
  )
}

export default Events