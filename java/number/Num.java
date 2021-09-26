package number;

public class Num{

	public final boolean isPrime(int n){
	if(n < 2)	return false;
	for(int i = 2; i <= n/2 ; ++i)
	if(n % i == 0)	return false; 
	return true;
	} 
	
	public final int countDigit(int n){
	int count = 0;
	while(n != 0){
	n /= 10;
	++count;
	}
	return count;
	}

	public final int sumOfArray(int array[]){
	int sum = 0;
	for(int i : array) sum += i;
	return sum;
	}
	
	public final int maxOfArray(int array[]){
	int max = array[0];
	for(int i : array) if(i > max) max = i;
	return max;
	}
	
	public final int maxOf3(int a,int b,int c){
	if( a >= b && a >= c) return a;
	else if(b >= a && b >= c) return b;
	return c;
	}	
}
