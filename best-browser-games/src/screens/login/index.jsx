import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  })

  function handleClick() {
    navigate(-1);
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login >>>",formData);

    // fetch(`http://localhost:3000/users?login=${formData.login}`)
    fetch(`http://localhost:3000/users?login=${formData.login}&password=${formData.password}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        alert("Você está logado!")
        navigate("/");
        }else {
          alert("Login inválido");
        }
      });
  }

  return (
    <main className='loginContainer'>
      <form onSubmit={handleSubmit}>
        <label> Login:
          <input 
            type="text" 
            name='login' 
            placeholder='Login'
            value={formData.login} 
            onChange={handleChange}
          />
        </label>
        <label> Senha:
          <input 
            type="password" 
            name='password'
            placeholder='Enter password'
            value={formData.password} 
            onChange={handleChange}
          />
        </label>
  
        <button type='submit'>Login</button>
        <button onClick={handleClick}>Voltar</button>
      </form>
    </main>
  );
}

export default Login
