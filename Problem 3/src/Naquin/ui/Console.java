package Naquin.ui;

import java.util.Scanner;

public class Console {

    private static Scanner sc = new Scanner(System.in);

    private static void displayLine() {
        System.out.println();
    }

    public static void displayLine(String s) {
        System.out.println(s);
    }

    public static String getString(String prompt) {
        System.out.print(prompt);
        String s = sc.nextLine();
        return s;
    }

}
