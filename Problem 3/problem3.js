/**
 * Created by samanthahuang on 3/7/16.
 */
var person = function () {
    var data = {
        firstName: "",
        $firstName: function (n) {
            data.firstName = n;
        },
        lastName: "",
        $lastName: function (n) {
            data.lastName = n;
        },
        emailAddress: "",
        $emailAddress: function (n) {
            data.emailAddress = n;
        },
        iden: "",
        $id: function (n) {
            data.iden = n;
        }
    };

    var F = function () {
    };
    f = new F();

    f.run = function (e) {
        return data[e];
    };

    return f;
}();

var employee = function (p) {
    var data = {
        firstName: "",
        $firstName: function (n) {
            data.firstName = n;
        },
        lastName: "",
        $lastName: function (n) {
            data.lastName = n;
        },
        emailAddress: "",
        $emailAddress: function (n) {
            data.emailAddress = n;
        },
        social: "",
        $social: function (n) {
            data.social = n;
        },
        idType: "Social Security"
    };

    var F = function () {
    };
    F.prototype = p;
    //p.run("id")(data[social]);
    f = new F();

    f.run = function (e) {
        var r = data[e];
        if (r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;

}(person);

var customer = function (p) {
    var data = {
        firstName: "",
        $firstName: function (n) {
            data.firstName = n;
        },
        lastName: "",
        $lastName: function (n) {
            data.lastName = n;
        },
        emailAddress: "",
        $emailAddress: function (n) {
            data.emailAddress = n;
        },
        customerNumber: 0,
        $customerNumber: function (n) {
            data.customerNumber = n;
        },
        idType: "Customer Number"
    };

    var F = function () {
    };
    F.prototype = p;
    f = new F();

    f.run = function (e) {
        var r = data[e];
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
        alert("Name: " + guy.run("firstName") + ' ' + guy.run("lastName") + '\nEmail: ' + guy.run("emailAddress") + "\n" + guy.run('idType') + ": " + guy.run("customerNumber") + "\n \nRegistration Complete!");
    }
    else if (person == "Employee") {
        alert("Name: " + guy.run("firstName") + ' ' + guy.run("lastName") + '\nEmail: ' + guy.run("emailAddress") + "\n" + guy.run('idType') + ": " + guy.run("social") + "\n \nRegistration Complete!");
    }
    else {
        alert("error");
    }

}