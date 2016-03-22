/**
 * Created by samanthahuang on 3/6/16.
 */
var person = function () {
    var info = {
        firstName: "",
        $firstName: function (p) {
            info.firstName = p;
        },
        lastName: "",
        $lastName: function (n) {
            info.lastName = n;
        },
        emailAddress: "",
        $emailAddress: function (n) {
            info.emailAddress = n;
        },
        iden: "",
        $id: function (n) {
            info.iden = n;
        }
    };

    var F = function () {
    };
    f = new F();

    f.run = function (e) {
        return info[e];
    };

    return f;
}();

var employee = function (p) {
    var info = {
        firstName: "",
        $firstName: function (n) {
            info.firstName = n;
        },
        lastName: "",
        $lastName: function (n) {
            info.lastName = n;
        },
        emailAddress: "",
        $emailAddress: function (n) {
            info.emailAddress = n;
        },
        social: "",
        $social: function (n) {
            info.social = n;
        },
        idType: "Social Security"
    };

    var F = function () {
    };
    F.prototype = p;
    f = new F();

    f.run = function (e) {
        var r = info[e];
        if (r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;

}(person);

var customer = function (p) {
    var info = {
        firstName: "",
        $firstName: function (n) {
            info.firstName = n;
        },
        lastName: "",
        $lastName: function (n) {
            info.lastName = n;
        },
        emailAddress: "",
        $emailAddress: function (n) {
            info.emailAddress = n;
        },
        customerNumber: 0,
        $customerNumber: function (n) {
            info.customerNumber = n;
        },
        idType: "Customer Number"
    };

    var F = function () {
    };
    F.prototype = p;
    f = new F();

    f.run = function (e) {
        var r = info[e];
        if (r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;

}(person);

function register() {
    var elt = document.getElementById("regForm");
    var person = elt.dropdown[elt.dropdown.selectedIndex].text;

    if (person == "Employee") {
        var guy = Object.create(employee);
        guy.run("$social")(elt.identification.value);
    } else if (person == "Customer") {
        var guy = Object.create(customer);
        guy.run("$customerNumber")(elt.identification.value);
    } else {
        alert("error");
    }

    guy.run("$firstName")(elt.fName.value);
    guy.run("$lastName")(elt.lName.value);
    guy.run("$emailAddress")(elt.email.value);


    if (person == "Customer") {
        if (guy.run("firstName") != "" && guy.run("lastName") != "" && guy.run("emailAddress") != "" && guy.run("customerNumber") != "") {
            alert("This was the customer info entered:\n \nName: " + guy.run("firstName") + ' ' + guy.run("lastName") + '\nEmail: ' + guy.run("emailAddress") + "\n" + guy.run('idType') + ": " + guy.run("customerNumber") + "\n \nRegistration Complete! Meow!")
        }
        else {
            alert("Missing information! Please double-check form. Meow.");
        }
    }


    else if (person == "Employee") {
        if (guy.run("firstName") != "" && guy.run("lastName") != "" && guy.run("emailAddress") != "" && guy.run("social") != "") {
            alert("This was the employee info entered:\n \nName: " + guy.run("firstName") + ' ' + guy.run("lastName") + '\nEmail: ' + guy.run("emailAddress") + "\n" + guy.run('idType') + ": " + guy.run("social") + "\n \nRegistration Complete! Meow!")
        }
        else {
            alert("Missing information! Please double-check form. Meow.");
        }
    }

}