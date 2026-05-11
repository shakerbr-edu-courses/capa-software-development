// comment

            let age = prompt("Please enter your age:");

            if (age == "") {
                alert("Please enter your age.");
            }

            if (confirm("Are you sure your age is correct?")) {
                alert("Your age is " + age);
            } else {
                alert("Please reenter your age.");
            }

            // confirm("Do you want to proceed?");

            // alert("Please enter your email address.");