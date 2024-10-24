$(document).ready(function () {
    $('#accountForm').on('submit', function (e) {
        e.preventDefault();  

        
        $('#message').empty();

       
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const age = $('#age').val();
        const gender = $('#gender').val().trim();
        const address = $('#address').val().trim();

        
        if (name.length < 3 || name.length > 50) {
            $('#message').append('<p class="error">Name must be between 3 and 50 characters.</p>');
            return;
        }

        
        if (email === '') {
            $('#message').append('<p class="error">Email is required.</p>');
            return;
        }

         
         if (phone.length < 10 || phone.length > 14) {
            $('#message').append('<p class="error">Phone must be between 10 and 14 characters.</p>');
            return;
        }

        
        if (age < 18 || age > 120) {
            $('#message').append('<p class="error">Age must be between 18 and 120.</p>');
            return;
        }

        
        if (gender.length < 4 || gender.length > 15) {
            $('#message').append('<p class="error">Gender must be between 4 and 15 characters.</p>');
            return;
        }

        
        if (address.length > 50) {
            $('#message').append('<p class="error">Address must not exceed 50 characters.</p>');
            return;
        }
         
         $('#message').append('<p class="success">Form submitted successfully!</p>');
        });
    });