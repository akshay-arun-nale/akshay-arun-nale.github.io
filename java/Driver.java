//Import class Num from Package number.
//Scanner class for Input.

import java.util.Scanner;
import number.Num;

public class Driver{	 
	public static void main(String args[]){	
	Scanner sc = new Scanner(System.in); 
	Num n = new Num();
		
	int choice = 0,length = 0;
	int array[];
		
	while(true){
	System.out.println("\n1.Check if a Number is Prime");
	System.out.println("2.Count Digit's in a Number");
	System.out.println("3.Sum of Array");
	System.out.println("4.Max element of Array");
	System.out.println("5.Max Number in 3 element's");
	System.out.println("6.Exit");
	
	try{
	System.out.println("Enter your choice");
	choice = Integer.parseInt(String.valueOf(sc.next().charAt(0)));
	switch(choice){
		case 1:	System.out.println("Enter Number");
		       	System.out.println(n.isPrime(sc.nextInt()));	
			break;
		case 2:	System.out.println("Enter Number");
			System.out.println(n.countDigit(sc.nextInt()) + " digits");
			break;
		case 3:	System.out.println("Enter Array Length");
			length = sc.nextInt();
			array = new int[length];
			System.out.println("Enter Array Element's");
			for(int i = 0; i < length;++i)	array[i] = sc.nextInt(); 
			System.out.println("Sum of array is " + n.sumOfArray(array));
			break;
		case 4:	System.out.println("Enter Array Length");
			length = sc.nextInt();
			array = new int[length];
			System.out.println("Enter Array Element's");
			for(int i = 0; i < length;++i)	array[i] = sc.nextInt(); 
			System.out.println("Max element of array is " + n.maxOfArray(array));
			break;
		case 5:	System.out.println("Enter 3 Number");
			System.out.println(n.maxOf3(sc.nextInt(),sc.nextInt(),sc.nextInt())+ " is max number");
			break;
		
		case 6:System.exit(0);
		default: System.out.println("Wrong choice");
	}
	}
	catch(Exception e){
	}
	}
	}
}
/*int a[] = {1,3,6,3,9,4};
System.out.println(n.countDigit(10101));
System.out.println(n.sumOfArray(a));
System.out.println(n.maxOfArray(a));
System.out.println(n.isPrime(4));
System.out.println(n.maxOf3(1,10,3));
*/	
