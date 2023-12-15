// authToggle.js

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleSignUp').addEventListener('click', function () {
        document.getElementById('authForm').innerHTML = `
            <!-- Email input -->
            <div class="form-outline mb-4">
                <input type="email" id="form1Example13" class="form-control form-control-lg" autocomplete="username" />
                <label class="form-label" for="form1Example13">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
                <input type="password" id="form1Example23" class="form-control form-control-lg" autocomplete="current-password" />
                <label class="form-label" for="form1Example23">Password</label>
            </div>

            <!-- Confirm Password input -->
            <div class="form-outline mb-4">
                <input type="password" id="form1Example33" class="form-control form-control-lg" autocomplete="current-password" />
                <label class="form-label" for="form1Example33">Confirm Password</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign Up</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" id="toggleSignIn">Sign In</button>
        `;
    });

    document.getElementById('toggleSignIn').addEventListener('click', function () {
        document.getElementById('authForm').innerHTML = `
            <!-- Email input -->
            <div class="form-outline mb-4">
                <input type="email" id="form1Example13" class="form-control form-control-lg" autocomplete="username" />
                <label class="form-label" for="form1Example13">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
                <input type="password" id="form1Example23" class="form-control form-control-lg" autocomplete="current-password" />
                <label class="form-label" for="form1Example23">Password</label>
            </div>

            <div class="d-flex justify-content-around align-items-center mb-4">
                <!-- Checkbox -->
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                </div>
                <a href="#!" id="toggleForm">Forgot password?</a>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" id="toggleSignUp">Sign Up</button>
        `;
    });

    document.getElementById('toggleForm').addEventListener('click', function () {
        // Handle Forgot Password
    });
});
