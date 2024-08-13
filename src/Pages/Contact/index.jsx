import ButtonSubmit from '../../components/buttonSubmit/buttonSubmit';
import './index.css'
const Contact = () => {
  const handleSubmit = () =>{
    console.log('hai');
  }
  return (
    <div className='contact-wrapper'>

      <form onSubmit={handleSubmit} className='contact-card'>
        <div className='contact-type'>
          <input type='text' placeholder='Name' />
        </div>
        <div className='contact-type'>
          <input type='text' placeholder='Email' />
        </div>
        <div className='contact-type'>
          <textarea placeholder='Subject'/>
        </div>
        <div className='btn-contact'>
          <ButtonSubmit/>
        </div>
      </form>
    </div>
  )
}

export default Contact