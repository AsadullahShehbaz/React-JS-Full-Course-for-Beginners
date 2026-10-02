import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
const App = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors,isSubmitting}
  } = useForm();

  const delay = (seconds) => new Promise((resolve)=>{
    setTimeout(resolve,seconds*1000)
  });

  const onSubmit = async (data)=>{
    await delay(5)

    try{
      const response = await fetch("http://127.0.0.8000/submit",{
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })

      const resData = await response.json()

      if(!response.ok){
        if(resData.detail){
          setError("myform",{ message: resData.detail })
        }
      }
    }
    catch(err){

    }
    console.log(data)
  }
  return (
    <>
      <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username",{required:{value:true,message:"Username is required"},minLength:{value:3,message:"Min Length of Username is 3 characters!"},maxLength:{value:5,message:"Max Length of Username is 5 characters!"}})} type='text' />
        {errors.username && <div className='red'>{errors.username.message}</div>}

        <input {...register("password",{required:{value:true,message:"Password is required"},minLength:{value:3,message:"Min Length of Password is 3 characters!"}})} type='password'/>
        {errors.password && <div className='red'>{errors.password.message}</div>}
        <input disabled={isSubmitting} type="submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}

        {isSubmitting && <div>Loading...</div>}
      </form>
      </div>
    </>
  )
}

export default App