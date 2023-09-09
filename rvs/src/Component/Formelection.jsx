import React, { useState } from 'react';
import './input_form.css'; // Import your CSS file
import Cookies from 'universal-cookie';


function Formelection() {
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleAddField = () => {
    setInputFields([...inputFields, { value: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...inputFields];
    newFields.splice(index, 1);
    setInputFields(newFields);
  };

  const handleInputChange = (index, event) => {
    const newFields = [...inputFields];
    newFields[index].value = event.target.value;
    setInputFields(newFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access the form data and input field values
    const { title, description } = formData;
    const candidateNames = inputFields.map((field) => field.value);

    // Log the values to the console
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Candidate Names:', candidateNames);

    const cookies = new Cookies();
    const data = {
      title: title,
      description: description,
      candis: candidateNames,
      ids: cookies.get("BROWSER-X-RENDER-COOKIE")
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/electionbuild/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Election build successful!');
        const responseData = await response.json();
        // Optionally, you can handle the response data as needed.
      } else {
        console.error('Election build failed!');
        // Handle unsuccessful election build (e.g., show an error message)
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }

    // You can add your logic here to submit the data to a server or perform other actions.
  };

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="divcenter">
        <form onSubmit={handleSubmit} className="input-form">
          <div className="body">
            <header className="header">
              <nav className="navbar">
                <h1>Organize Election</h1>
              </nav>
            </header>
            <div className="flex justify-center items-center m-5 p-5 font-serif text-3xl ">
              <p className="text-center">
                This is a simple tool to organize your election. Add candidates or options below and click "Add Field" to create more fields.
              </p>
            </div>

            <div className="content">
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title/Host"
                  value={formData.title}
                  onChange={handleFormInputChange}
                />
              </div>
              <div className="textarea">
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleFormInputChange}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              {inputFields.map((field, index) => (
                <div className="input-field" key={index}>
                  <input
                    type="text"
                    placeholder="Add Name"
                    value={field.value}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  <button onClick={() => handleRemoveField(index)}>Remove</button>
                </div>
              ))}
              <button className="add-button" type="button" onClick={handleAddField}>
                Add Candidate
              </button>
              <br />
              <div className="flexb"></div>
              <input type="submit" value="Submit" className="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Formelection;
