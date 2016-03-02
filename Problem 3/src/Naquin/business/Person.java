package Naquin.business;

public abstract class Person {

    private String firstName, lastName, email;

    public Person() {
        this.firstName = "John";
        this.lastName = "Hancock";
        this.email = "johnhancock@gmail.com";
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public String getEmail() {
        return this.email;
    }

    @Override
    public String toString() {
        return "Name: " + firstName + " " + lastName + "\n" + "Email: " + email;
    }

    public abstract String getDisplayText();




}
