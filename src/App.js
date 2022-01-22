import {Formik} from "formik";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItemsToShoppingList, deleteShoppingListItem} from "./shoppinglistSlicer";

//useSelector
//useDispatch
function App() {
    //local state
    const dispatch = useDispatch();
    const {shoppingList} = useSelector(state => state.list)
  // const [shoppingList, setShoppingList] = useState([])

  const handleSubmit = (values, e) => {
    values.id = Date.now()
      /*
      * Add new item to shopping list
      * */
      dispatch(addItemsToShoppingList(values))
    // setShoppingList(prevState => [...prevState, values])
    e.resetForm()
  }

  const deleteShoppingList = (id) => {
      /*
      * Delete item from shopping list
      * */
    // setShoppingList(prevState => prevState.filter(item => item.id !== id))
      dispatch(deleteShoppingListItem(id))
  }

  return (
      <div className="container">
        <h1 className="text-center">Shopping List</h1>
        <Formik initialValues={{item:""}} onSubmit={handleSubmit}>
          {({values, handleSubmit, handleChange, handleBlur}) => (
                <form onSubmit={handleSubmit} className="custom-form">
                  <input required={true} onBlur={handleBlur} value={values.item} onChange={handleChange} name="item" className="form-control"/>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )}
        </Formik>

        <div>
          {shoppingList.map(item => (
                <div key={item.id} className="item">
                  <div>
                    <h4>{item.item}</h4>
                    <button type="button" className="btn btn-danger" onClick={()=> deleteShoppingList(item.id)}>Delete</button>
                  </div>
                </div>
            ))}
        </div>
      </div>
  );
}

export default App;
