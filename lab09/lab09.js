
// Lab 09 Tail Recursion of Fibonacci
// Resources used
// https://stackoverflow.com/questions/33923/what-is-tail-recursion
// https://www.geeksforgeeks.org/tail-recursion/
// http://wiki.c2.com/?TailRecursion


// dynamic fib from the slides
function fib_dp(n)
{
    var fib_old = 1;
    var fib = 1;
    var fib_new;
    while(n > 2)
    {
        // all of this is the fib(n - 1) + fib(n - 2)
        fib_new = fib + fib_old;
        fib_old = fib;
        fib = fib_new;
        --n;
    }
    return fib;
}

// function for tail fib
function tailFib(n)
{
    // set an initial if statement to just return 1 if n <= 2
    if(n <= 2)
    {
        return 1;
    }
    else // return the recursive of fibonacci sequence with n - 1 and n - 2
    // this will break n down into smaller numbers and eventually 1 and then add them back together
    // until we get the accurate fibonacci number
    {
        return tailFib(n - 1) + tailFib(n - 2);
    }

}

// print test function
function print(n)
{
    console.log("The fibonacci of " + n + " is: ");
    console.log(tailFib(n));

}

// testing
print(9); // 34
print(10); // 55
print(11); // 89
print(12); // 144
print(13); // 233


