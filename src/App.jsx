import FetchData from "./FetchData"


function App(){
  return (
    
    <div>
    {/* Question 1 */}
      <h1>Hello World</h1>
    
    {/* Question 2 */}
      <div className="container">
        <form>
          <div>
            <label>Email:</label>
            <input type="email"/>
          </div>

          <div>
            <label>Password:</label>
            <input type="password"/>
          </div>

          <div><button type="submit">Submit</button></div>
        </form>
      </div>

    {/* Question 3 Refer FetchData.jsx */}
      <FetchData />
    </div>

    
  )
}




export default App
