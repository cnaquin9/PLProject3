package Naquin.ui;

import Naquin.business.Customer;
import Naquin.business.Employee;

import java.util.Scanner;

public class PersonApp {

    public static void main(String[] args) {
        System.out.println("Welcome to the Person Tester application");
        System.out.println("");
        Scanner sc = new Scanner(System.in);
        String choice = "y";
        while (choice.equalsIgnoreCase("y")) {
            System.out.print("Create customer or employee? (c/e): ");
            String choice2 = sc.nextLine();
            System.out.println("");

            if (choice2.contains("c")) {
                String firstName = Console.getString("Enter first name: ");
                String lastName = Console.getString("Enter last name: ");
                String email = Console.getString("Enter email address: ");
                String customerNumber = Console.getString("Customer number: ");

                Customer c = new Customer();
                c.setFirstName(firstName);
                c.setLastName(lastName);
                c.setEmail(email);
                c.setCustomerNumber(customerNumber);

                Console.displayLine("");
                Console.displayLine("You entered:");
                Console.displayLine(c.getDisplayText());

            } else if (choice2.contains("e")) {
                String firstName = Console.getString("Enter first name: ");
                String lastName = Console.getString("Enter last name: ");
                String email = Console.getString("Enter email address: ");
                String ssNumber = Console.getString("Social security number: ");

                Employee e = new Employee();
                e.setFirstName(firstName);
                e.setLastName(lastName);
                e.setEmail(email);
                e.setSsNumber(ssNumber);

                Console.displayLine("");
                Console.displayLine("You entered:");
                Console.displayLine(e.getDisplayText());

            }


            // see if the user wants to continue
            System.out.println();
            System.out.print("Continue? (y/n): ");
            choice = sc.nextLine();
            System.out.println();

        }
    }
}