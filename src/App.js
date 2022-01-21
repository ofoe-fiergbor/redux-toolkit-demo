import {Formik} from "formik";
import {useState} from "react";

function App() {

  const [shoppingList, setShoppingList] = useState([])

  const handleSubmit = (values, e) => {
    values.id = Date.now()
    setShoppingList(prevState => [...prevState, values])
    e.resetForm()
  }

  const deleteShoppingList = (id) => {
    setShoppingList(shoppingList.filter(item => item.id !== id))
  }

  return (
      <div className="container">
        <h1 className="text-center">Shopping List</h1>
        <Formik initialValues={{item:""}} onSubmit={handleSubmit}>
          {
            ({values, handleSubmit, handleChange, handleBlur}) => (
                <form onSubmit={handleSubmit} className="custom-form">
                  <input required={true} onBlur={handleBlur} value={values.item} onChange={handleChange} name="item"
                         className="form-control"/>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )
          }
        </Formik>

        <div>
          {
            shoppingList.map(item => (
                <div key={item.id} className="item">
                  <div>
                    <h4>{item.item}</h4>
                    <button type="button" className="btn btn-danger" onClick={()=> deleteShoppingList(item.id)}>Delete</button>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
  );
}

export default App;
