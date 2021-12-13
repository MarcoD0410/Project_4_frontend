import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialList, handleSubmit, buttonLabel}) => {

  const navigate = useNavigate()

  // The Form State
  const [formData, setFormData] = useState(initialList)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/")

  }

  return <form onSubmit={handleSubmission}>
    <input
      type="text"
      onChange={handleChange}
      value={formData.item}
      name="item"
      />
    <input
    type="text"
    onChange={handleChange}
    value={formData.amount}
    name="amount"
    />
    <input type="submit" value={buttonLabel} />
  </form>
};

export default Form;