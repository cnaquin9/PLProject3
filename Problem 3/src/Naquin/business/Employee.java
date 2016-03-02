package Naquin.business;

public class Employee extends Person {

    private String ssNumber;

    public Employee() {
        super();
        ssNumber = "111-11-1111";
    }

    public void setSsNumber(String ssNumber) {
        this.ssNumber = ssNumber;
    }

    public String getSsNumber() {
        return ssNumber;
    }

    @Override
    public String getDisplayText() {
        return super.toString() + "\n" + "Social security number: " + ssNumber;
    }

}

