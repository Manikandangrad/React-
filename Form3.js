import React from 'react'
import {useState} from 'react'
 function Form3() {
  const[data,setData]=useState({firstname:'',lastname:'',password:''})
  const changeData=(e)=>
  {
    setData({...data,[e.target.name]:e.target.value})
  }
 const onSubmit=(e)=>
 {
  e.preventDefault()
  console.log(data)
 }
  return (
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-sm-5">
                  <form onSubmit={onSubmit}>
                    <div class="card">
                      <div class="card-header">
                        <h2>Login Now </h2>
                        </div>
                        <div class="card-body">
                        <div class="form-group">
                          <label>Firstname</label>
                          <input type="text" class="form-control" name="firstname" value={data.firstname} onChange={changeData} required/>
                        </div>
                        <div class="form-group mt-3">
                           <label>Lastname</label>
                           <input type="text" class="form-control" name="lastname" value={data.lastname} onChange={changeData} required/>
                        </div>
                        <div class="form-group mt-3">
                           <label>Password</label>
                           <input type="password" class="form-control" name="password" value={data.password} onChange={changeData} required/>
                        </div>
                        <button class="btn btn-primary mt-3 w-100">Login</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Form3
            