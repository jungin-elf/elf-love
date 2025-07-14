// src/components/LoginForm.jsx

function LoginForm() {
  function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("로그인 성공!");
      })
      .catch((error) => {
        alert("로그인 실패: " + error.message);
      });
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>회원 로그인</h2>
      <input type="email" name="email" placeholder="이메일" required /><br />
      <input type="password" name="password" placeholder="비밀번호" required /><br />
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;
