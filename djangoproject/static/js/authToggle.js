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
            <button type="submit" class="btn btn-primary btn-lg btn-block" id="submitButton">Sign Up</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" id="toggleSignIn">Sign In</button>
            
            <!-- Move the event listener registration inside the 'toggleSignUp' click event -->
            <button type="button" class="btn btn-link" id="toggleForm">Forgot password?</button>
        `;
        
        // Move the event listener registration inside the 'toggleSignUp' click event
        document.getElementById('toggleForm').addEventListener('click', function () {
            // Handle Forgot Password
        });
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
            <button type="submit" class="btn btn-primary btn-lg btn-block" id="submitButton">Sign in</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" id="toggleSignUp">Sign Up</button>

            <!-- Move the event listener registration inside the 'toggleSignIn' click event -->
            <button type="button" class="btn btn-link" id="toggleForm">Forgot password?</button>
        `;
        
        // Move the event listener registration inside the 'toggleSignIn' click event
        document.getElementById('toggleForm').addEventListener('click', function () {
            // Handle Forgot Password
        });
    });

    document.getElementById('toggleForm').addEventListener('click', function () {
        // Handle Forgot Password
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // ... your existing code ...

    document.getElementById('submitButton').addEventListener('click', function () {
        // Get values from the form
        console.log("clicked works");
        const email = document.getElementById('form1Example13').value;
        const password = document.getElementById('form1Example23').value;

        // Validate the inputs (you might want to add more validation)
        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        // Create a data object to send in the request
        const data = {
            email: email,
            password: password
        };

        // Send a POST request to your backend endpoint for signup
        fetch('/account/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server (success or error)
            console.log('Success:', data);
            // You might want to redirect the user to a login page or display a success message
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle the error (e.g., display an error message to the user)
        });
    });

    // ... rest of your existing code ...
});
