public class BasicAssignment{
	public static void main(String args[]){
	//print statement
	System.out.println("HELLO WORLD!!!");	
	
	//datatypes
	
	byte age = 22;
	short birthDate = 1998;
	int lockId = 1234565;
	long HASH_SHA = 6579996653655799L;
	char letter = 'A';
	
	float fn = 3.14f; 	    
	double dn = 3.1415926535d;

	double dage = age;   
	
	int ni = (int) dn;
	
	boolean bool = true;   
	
	String str = "String conatins number's and letter's ALEX -------6789";
	
	System.out.println("Values are == ");
	System.out.println(age);
	System.out.println(birthDate);
	System.out.println(lockId);
	System.out.println(HASH_SHA);
	System.out.println(letter);
	System.out.println(fn);
	System.out.println(dn);
	System.out.println(!bool);
	System.out.println(bool);
	System.out.println("int automatically widened" + dage);
	System.out.println("double narrowed using (int)"+ni);    
	System.out.println("double narrowed using (int)"+ni);
	    
	System.out.println("Operator's");    
	System.out.println(2+2);
	System.out.println(2-2);
	System.out.println(2/2);
	System.out.println(5%2);
	System.out.println(2*2);    
	    
	if(age < 50) System.out.println("Young");
	else System.out.println("Old");	
	    
	System.out.println("check age even or odd");    
	if (age % 2 == 0) System.out.println("Age is Even");
	else System.out.println("Age is Odd");
	    
	System.out.println(1 == 1);
	System.out.println(2 != 2);
	System.out.println(2 > 2);
	System.out.println(2 < 2);
	System.out.println(2 >= 2);
	System.out.println(2 <= 3);
	    
	System.out.println("Avoid dividing zero");    
	int DBZ = 23;
	if(DBZ == 0)	System.out.println("zero value");
	else if (DBZ % 2 == 0)	System.out.println("even value");
	else	System.out.println("odd value");
	    
	System.out.println("Number pos or neg or zero");
	int num = -12;
	
	if (num == 0) System.out.println("zero");
	else if(num > 0  && num % 2 == 0) System.out.println("even pos");
	else if(num < 0  && num % 2 == 0) System.out.println("even neg");
	else if(num > 0  && num % 2 != 0) System.out.println("odd pos");
	else System.out.println("odd neg");
	    
	//OR // use && for and
	if(num > 0 || num < 0)	System.out.println("num is pos");
	else System.out.println("zero");
	
	
	//LOOPS
	
	System.out.println("print 1 to 10 num in one line");
	for(int i = 1; i <= 10;++i) System.out.print(i+" ");
	
	System.out.println("\nprint 10 to 1 num in one line");
	int w = 10;
	while(w != 0)	System.out.print(" "+w--);
	
	
	do System.out.println("\ndo while executes once even if condition is false");
	while( w > 0);
	}
}
