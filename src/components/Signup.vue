<script>

</script>

<template>
    <div id = 'Signup'>
   <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <form>
        <label for="email"><b>Email</b></label>
        <br>
        <input type="text" placeholder="Enter Email" name="email" required>
        <br><br>

        <label for="psw"><b>Password</b></label>
        <br>
        <input type="password" placeholder="Enter Password" name="psw" required>
        <br><br>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <br>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
        <br><br>

        <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
        </label>

    </form>
    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
    <button>Sign Up</button>

    <p>Forgot your password?</p>
    <p>Already have an account? <a href="">Log in</a></p>
    </div>

</template>