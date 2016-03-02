package Naquin.business;

public class Customer extends Person {

    private String customerNumber;

    public Customer() {
        super();
        customerNumber = "M10293";
    }


    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public String getCustomerNumber() {
        return customerNumber;
    }

    @Override
    public String getDisplayText() {
        return super.toString() + "\n" + "Customer number: " + customerNumber;
    }
}
