<form method="POST">
	<hgroup>
		<h2>Register</h2>
		<h3>To post articles, you'll need an account.</h3>
	</hgroup>

	<label for="mail">Email</label>
	<input type="mail" id="mail" name="mail" required />

    <label for="contry_code">Contry Code</label>
	<input type="text" id="contry_code" name="contry_code"  />

    

	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />

	<button type="submit">Register</button>
</form>
<p>Already have an account? <a href="/auth/login">Login</a></p>