/* MultitaskCoder — script */
const DATA = {
    programs: [{"no":1,"name":"Hello World","desc":"The foundational program demonstrating basic syntax and standard output.","output":"Hello, World!","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  printf(\"Hello, World!\\n\");\n  return 0;\n}","Python":"print(\"Hello, World!\")","Java":"public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}"}},{"no":2,"name":"Sum of Two Numbers","desc":"Accepts two values from the user and computes their arithmetic sum.","output":"Sum: 30","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int a, b;\n  scanf(\"%d %d\", &a, &b);\n  printf(\"Sum: %d\\n\", a + b);\n  return 0;\n}","Python":"a = int(input())\nb = int(input())\nprint(\"Sum:\", a + b)","Java":"import java.util.Scanner;\npublic class Sum {\n  public static void main(String[] a) {\n    Scanner s = new Scanner(System.in);\n    int x = s.nextInt(), y = s.nextInt();\n    System.out.println(\"Sum: \" + (x + y));\n  }\n}"}},{"no":3,"name":"Largest of Three Numbers","desc":"Uses conditional chains to select the maximum among three inputs.","output":"Largest: 25","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int a = 10, b = 25, c = 17, max = a;\n  if (b \u003e max) max = b;\n  if (c \u003e max) max = c;\n  printf(\"Largest: %d\\n\", max);\n  return 0;\n}","Python":"a, b, c = 10, 25, 17\nprint(\"Largest:\", max(a, b, c))","Java":"public class Largest {\n  public static void main(String[] a) {\n    int x = 10, y = 25, z = 17;\n    int m = Math.max(x, Math.max(y, z));\n    System.out.println(\"Largest: \" + m);\n  }\n}"}},{"no":4,"name":"Check Even or Odd","desc":"Uses the modular arithmetic operator to evaluate number parity.","output":"Even","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int n = 8;\n  printf(n % 2 == 0 ? \"Even\\n\" : \"Odd\\n\");\n  return 0;\n}","Python":"n = 8\nprint(\"Even\" if n % 2 == 0 else \"Odd\")","Java":"public class Parity {\n  public static void main(String[] a) {\n    int n = 8;\n    System.out.println(n % 2 == 0 ? \"Even\" : \"Odd\");\n  }\n}"}},{"no":5,"name":"Swap Two Numbers","desc":"Exchanges the values of two variables using a temporary holder.","output":"x=10, y=5","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int x = 5, y = 10, t;\n  t = x; x = y; y = t;\n  printf(\"x=%d, y=%d\\n\", x, y);\n  return 0;\n}","Python":"x, y = 5, 10\nx, y = y, x\nprint(f\"x={x}, y={y}\")","Java":"public class Swap {\n  public static void main(String[] a) {\n    int x = 5, y = 10, t = x; x = y; y = t;\n    System.out.println(\"x=\" + x + \", y=\" + y);\n  }\n}"}},{"no":6,"name":"Factorial (Iterative)","desc":"Computes the product of all positive integers less than or equal to n using loops.","output":"120","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int n = 5, f = 1;\n  for (int i = 2; i \u003c= n; i++) f *= i;\n  printf(\"%d\\n\", f);\n  return 0;\n}","Python":"import math\nprint(math.factorial(5))","Java":"public class Factorial {\n  public static void main(String[] a) {\n    int n = 5, f = 1;\n    for (int i = 2; i \u003c= n; i++) f *= i;\n    System.out.println(f);\n  }\n}"}},{"no":7,"name":"Fibonacci Series","desc":"Generates the sequence where each number is the sum of the two preceding ones.","output":"0 1 1 2 3 5","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int a = 0, b = 1;\n  for (int i = 0; i \u003c 6; i++) {\n    printf(\"%d \", a);\n    int t = a + b; a = b; b = t;\n  }\n  return 0;\n}","Python":"a, b = 0, 1\nfor _ in range(6):\n  print(a, end=\" \")\n  a, b = b, a + b","Java":"public class Fib {\n  public static void main(String[] a) {\n    int x = 0, y = 1;\n    for (int i = 0; i \u003c 6; i++) {\n      System.out.print(x + \" \");\n      int t = x + y; x = y; y = t;\n    }\n  }\n}"}},{"no":8,"name":"Check Prime Number","desc":"Checks divisibility up to the square root of a target integer to determine primality.","output":"Prime","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int n = 17, ok = n \u003e 1;\n  for (int i = 2; i * i \u003c= n; i++) if (n % i == 0) { ok = 0; break; }\n  printf(ok ? \"Prime\\n\" : \"Not Prime\\n\");\n}","Python":"n = 17\nprint(\"Prime\" if n \u003e 1 and all(n % i for i in range(2, int(n**0.5)+1)) else \"Not Prime\")","Java":"public class Prime {\n  public static void main(String[] a) {\n    int n = 17; boolean ok = n \u003e 1;\n    for (int i = 2; i * i \u003c= n; i++) if (n % i == 0) { ok = false; break; }\n    System.out.println(ok ? \"Prime\" : \"Not Prime\");\n  }\n}"}},{"no":9,"name":"Reverse a Number","desc":"Extracts digits and rebuilds the number in reverse order.","output":"4321","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int n = 1234, r = 0;\n  while (n) { r = r * 10 + n % 10; n /= 10; }\n  printf(\"%d\\n\", r);\n}","Python":"n = 1234\nprint(int(str(n)[::-1]))","Java":"public class Reverse {\n  public static void main(String[] a) {\n    int n = 1234, r = 0;\n    while (n != 0) { r = r * 10 + n % 10; n /= 10; }\n    System.out.println(r);\n  }\n}"}},{"no":10,"name":"Armstrong Number","desc":"Verifies if an n-digit number equals the sum of its digits raised to the power of n.","output":"Armstrong","code":{"C":"#include \u003cstdio.h\u003e\n#include \u003cmath.h\u003e\nint main() {\n  int n = 153, t = n, s = 0;\n  while (t) { int d = t % 10; s += d*d*d; t /= 10; }\n  printf(s == n ? \"Armstrong\\n\" : \"No\\n\");\n}","Python":"n = 153\nprint(\"Armstrong\" if sum(int(d)**len(str(n)) for d in str(n)) == n else \"No\")","Java":"public class Armstrong {\n  public static void main(String[] a) {\n    int n = 153, t = n, s = 0;\n    while (t != 0) { int d = t % 10; s += d*d*d; t /= 10; }\n    System.out.println(s == n ? \"Armstrong\" : \"No\");\n  }\n}"}},{"no":11,"name":"Reverse a String","desc":"Reverses character order in a string using indexing or loops.","output":"enignE","code":{"C":"#include \u003cstdio.h\u003e\n#include \u003cstring.h\u003e\nint main() {\n  char s[] = \"Engine\"; int n = strlen(s);\n  for (int i = n - 1; i \u003e= 0; i--) putchar(s[i]);\n  puts(\"\");\n}","Python":"s = \"Engine\"\nprint(s[::-1])","Java":"public class Rev {\n  public static void main(String[] a) {\n    System.out.println(new StringBuilder(\"Engine\").reverse());\n  }\n}"}},{"no":12,"name":"GCD / HCF (Euclidean)","desc":"Implements the ancient Euclidean algorithm for fast divisor extraction.","output":"GCD: 6","code":{"C":"#include \u003cstdio.h\u003e\nint main() {\n  int a = 24, b = 18;\n  while (b) { int t = b; b = a % b; a = t; }\n  printf(\"GCD: %d\\n\", a);\n}","Python":"import math\nprint(\"GCD:\", math.gcd(24, 18))","Java":"public class Gcd {\n  public static void main(String[] a) {\n    int x = 24, y = 18;\n    while (y != 0) { int t = y; y = x % y; x = t; }\n    System.out.println(\"GCD: \" + x);\n  }\n}"}},{"no":13,"name":"LCM of Two Numbers","desc":"Computes lowest common multiple using the product / GCD identity.","output":"LCM: 36","code":{"C":"#include \u003cstdio.h\u003e\nint gcd(int a,int b){return b?gcd(b,a%b):a;}\nint main(){int a=12,b=9; printf(\"LCM: %d\\n\", a*b/gcd(a,b));}","Python":"import math\na, b = 12, 9\nprint(\"LCM:\", a * b // math.gcd(a, b))","Java":"public class Lcm {\n  static int g(int a,int b){return b==0?a:g(b,a%b);}\n  public static void main(String[] a){int x=12,y=9; System.out.println(\"LCM: \"+ x*y/g(x,y));}\n}"}},{"no":14,"name":"Sum of Digits","desc":"Processes digits sequentially via standard base-10 extraction loops.","output":"Sum: 15","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int n=12345,s=0; while(n){s+=n%10;n/=10;} printf(\"Sum: %d\\n\",s);}","Python":"n = 12345\nprint(\"Sum:\", sum(int(d) for d in str(n)))","Java":"public class Digits {\n  public static void main(String[] a){int n=12345,s=0; while(n!=0){s+=n%10;n/=10;} System.out.println(\"Sum: \"+s);}\n}"}},{"no":15,"name":"Celsius to Fahrenheit","desc":"Performs standard scaling conversions using classical decimal expressions.","output":"98.60","code":{"C":"#include \u003cstdio.h\u003e\nint main(){double c=37.0; printf(\"%.2f\\n\", c*9/5+32);}","Python":"c = 37.0\nprint(f\"{c*9/5+32:.2f}\")","Java":"public class Temp {\n  public static void main(String[] a){double c=37.0; System.out.printf(\"%.2f%n\", c*9/5+32);}\n}"}},{"no":16,"name":"Max in Array","desc":"Scans an array once, tracking the largest value seen so far.","output":"Max: 67","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int a[]={12,67,4,45,23},m=a[0]; for(int i=1;i\u003c5;i++) if(a[i]\u003em) m=a[i]; printf(\"Max: %d\\n\",m);}","Python":"a = [12, 67, 4, 45, 23]\nprint(\"Max:\", max(a))","Java":"public class Max {\n  public static void main(String[] a){int[] x={12,67,4,45,23},m={x[0]}; for(int v:x) if(v\u003em[0]) m[0]=v; System.out.println(\"Max: \"+m[0]);}\n}"}},{"no":17,"name":"Second Largest in Array","desc":"Track state variables dynamically across collections in a single pass.","output":"Second: 45","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int a[]={12,67,4,45,23},m=-1,s=-1; for(int i=0;i\u003c5;i++){ if(a[i]\u003em){s=m;m=a[i];} else if(a[i]\u003es) s=a[i]; } printf(\"Second: %d\\n\",s);}","Python":"a = [12, 67, 4, 45, 23]\nprint(\"Second:\", sorted(set(a))[-2])","Java":"public class Second {\n  public static void main(String[] a){int[] x={12,67,4,45,23},m=-1,s=-1; for(int v:x){ if(v\u003em){s=m;m=v;} else if(v\u003es) s=v; } System.out.println(\"Second: \"+s);}\n}"}},{"no":18,"name":"Linear Search","desc":"Sequentially compares each element to the target key.","output":"Found at index: 2","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int a[]={10,20,30,40}, k=30; for(int i=0;i\u003c4;i++) if(a[i]==k){printf(\"Found at index: %d\\n\",i);return 0;} printf(\"Not found\\n\");}","Python":"a = [10, 20, 30, 40]\nk = 30\nprint(\"Found at index:\", a.index(k) if k in a else -1)","Java":"public class Linear {\n  public static void main(String[] a){int[] x={10,20,30,40}, k=30; for(int i=0;i\u003cx.length;i++) if(x[i]==k){System.out.println(\"Found at index: \"+i);return;}}\n}"}},{"no":19,"name":"Binary Search (Iterative)","desc":"Implements binary split searches on sorted lists.","output":"Index: 3","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int a[]={1,3,5,7,9}, k=7, l=0, r=4; while(l\u003c=r){int m=(l+r)/2; if(a[m]==k){printf(\"Index: %d\\n\",m);return 0;} if(a[m]\u003ck) l=m+1; else r=m-1;}}","Python":"import bisect\na = [1,3,5,7,9]\ni = bisect.bisect_left(a, 7)\nprint(\"Index:\", i)","Java":"public class Binary {\n  public static void main(String[] a){int[] x={1,3,5,7,9}; int k=7,l=0,r=x.length-1; while(l\u003c=r){int m=(l+r)/2; if(x[m]==k){System.out.println(\"Index: \"+m);return;} if(x[m]\u003ck) l=m+1; else r=m-1;}}\n}"}},{"no":20,"name":"Bubble Sort","desc":"Repeatedly steps through the list, swapping adjacent elements that are out of order.","output":"1 2 3 5 8","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int a[]={5,2,8,1,3},n=5; for(int i=0;i\u003cn;i++) for(int j=0;j\u003cn-i-1;j++) if(a[j]\u003ea[j+1]){int t=a[j];a[j]=a[j+1];a[j+1]=t;} for(int i=0;i\u003cn;i++) printf(\"%d \",a[i]);}","Python":"a = [5, 2, 8, 1, 3]\nfor i in range(len(a)):\n  for j in range(len(a)-i-1):\n    if a[j] \u003e a[j+1]: a[j], a[j+1] = a[j+1], a[j]\nprint(*a)","Java":"public class Bubble {\n  public static void main(String[] a){int[] x={5,2,8,1,3}; for(int i=0;i\u003cx.length;i++) for(int j=0;j\u003cx.length-i-1;j++) if(x[j]\u003ex[j+1]){int t=x[j];x[j]=x[j+1];x[j+1]=t;} for(int v:x) System.out.print(v+\" \");}\n}"}},{"no":21,"name":"Selection Sort","desc":"Places the minimum of the unsorted region at the front on each pass.","output":"1 2 3 5 8","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int a[]={5,2,8,1,3},n=5; for(int i=0;i\u003cn;i++){int mi=i; for(int j=i+1;j\u003cn;j++) if(a[j]\u003ca[mi]) mi=j; int t=a[i];a[i]=a[mi];a[mi]=t;} for(int i=0;i\u003cn;i++) printf(\"%d \",a[i]);}","Python":"a = [5, 2, 8, 1, 3]\nfor i in range(len(a)):\n  mi = i + min(range(len(a)-i), key=lambda k: a[i+k])\n  a[i], a[mi] = a[mi], a[i]\nprint(*a)","Java":"public class Sel {\n  public static void main(String[] a){int[] x={5,2,8,1,3}; for(int i=0;i\u003cx.length;i++){int mi=i; for(int j=i+1;j\u003cx.length;j++) if(x[j]\u003cx[mi]) mi=j; int t=x[i];x[i]=x[mi];x[mi]=t;} for(int v:x) System.out.print(v+\" \");}\n}"}},{"no":22,"name":"Sum of Array Elements","desc":"Accumulates elements across the collection.","output":"Sum: 40","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int a[]={6,8,10,12,4},s=0; for(int i=0;i\u003c5;i++) s+=a[i]; printf(\"Sum: %d\\n\",s);}","Python":"a = [6, 8, 10, 12, 4]\nprint(\"Sum:\", sum(a))","Java":"public class Sum {\n  public static void main(String[] a){int[] x={6,8,10,12,4},s=0; for(int v:x) s+=v; System.out.println(\"Sum: \"+s);}\n}"}},{"no":23,"name":"Matrix Multiplication","desc":"Implements classical row-column dot product matching loops.","output":"19 22 43 50","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int A[2][2]={{1,2},{3,4}},B[2][2]={{5,6},{7,8}},C[2][2]={0};\n for(int i=0;i\u003c2;i++) for(int j=0;j\u003c2;j++) for(int k=0;k\u003c2;k++) C[i][j]+=A[i][k]*B[k][j];\n for(int i=0;i\u003c2;i++) for(int j=0;j\u003c2;j++) printf(\"%d \",C[i][j]);}","Python":"A = [[1,2],[3,4]]; B = [[5,6],[7,8]]\nC = [[sum(A[i][k]*B[k][j] for k in range(2)) for j in range(2)] for i in range(2)]\nprint(*[v for row in C for v in row])","Java":"public class Mat {\n  public static void main(String[] a){int[][] A={{1,2},{3,4}},B={{5,6},{7,8}},C=new int[2][2];\n    for(int i=0;i\u003c2;i++) for(int j=0;j\u003c2;j++) for(int k=0;k\u003c2;k++) C[i][j]+=A[i][k]*B[k][j];\n    for(int[] r:C) for(int v:r) System.out.print(v+\" \");}\n}"}},{"no":24,"name":"Count Vowels and Consonants","desc":"Performs iterative conditional string character verification.","output":"V:2 C:3","code":{"C":"#include \u003cstdio.h\u003e\n#include \u003cctype.h\u003e\n#include \u003cstring.h\u003e\nint main(){char s[]=\"hello\"; int v=0,c=0; for(int i=0;s[i];i++){char x=tolower(s[i]); if(isalpha(x)){ if(strchr(\"aeiou\",x)) v++; else c++; }} printf(\"V:%d C:%d\\n\",v,c);}","Python":"s = \"hello\".lower()\nv = sum(c in \"aeiou\" for c in s if c.isalpha())\nc = sum(c.isalpha() and c not in \"aeiou\" for c in s)\nprint(f\"V:{v} C:{c}\")","Java":"public class CountVC {\n  public static void main(String[] a){String s=\"hello\"; int v=0,c=0; for(char x:s.toCharArray()) if(Character.isLetter(x)){ if(\"aeiou\".indexOf(Character.toLowerCase(x))\u003e=0) v++; else c++; } System.out.println(\"V:\"+v+\" C:\"+c);}\n}"}},{"no":25,"name":"Leap Year Check","desc":"Applies the Gregorian leap-year rules to a target year.","output":"Leap Year","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int y=2024; printf(((y%4==0 && y%100!=0) || y%400==0) ? \"Leap Year\\n\" : \"Not\\n\");}","Python":"y = 2024\nprint(\"Leap Year\" if (y%4==0 and y%100!=0) or y%400==0 else \"Not\")","Java":"public class Leap {\n  public static void main(String[] a){int y=2024; System.out.println(((y%4==0 && y%100!=0) || y%400==0) ? \"Leap Year\" : \"Not\");}\n}"}},{"no":26,"name":"Decimal to Binary","desc":"Converts integer numeric scales down into standard base-2 formats.","output":"1010","code":{"C":"#include \u003cstdio.h\u003e\nvoid b(int n){ if(n\u003e1) b(n/2); printf(\"%d\", n%2); }\nint main(){ b(10); puts(\"\"); }","Python":"print(bin(10)[2:])","Java":"public class Bin {\n  public static void main(String[] a){ System.out.println(Integer.toBinaryString(10)); }\n}"}},{"no":27,"name":"Star Pattern (Right Triangle)","desc":"Prints an ascending row of asterisks using nested iteration.","output":"*\n**\n***\n****","code":{"C":"#include \u003cstdio.h\u003e\nint main(){ for(int i=1;i\u003c=4;i++){ for(int j=0;j\u003ci;j++) putchar('*'); puts(\"\"); } }","Python":"for i in range(1, 5):\n  print(\"*\" * i)","Java":"public class Star {\n  public static void main(String[] a){ for(int i=1;i\u003c=4;i++){ for(int j=0;j\u003ci;j++) System.out.print(\"*\"); System.out.println(); } }\n}"}},{"no":28,"name":"Pascal's Triangle","desc":"Computes spatial combination sets based on iterative coefficient sums.","output":"1\n1 1\n1 2 1\n1 3 3 1","code":{"C":"#include \u003cstdio.h\u003e\nint main(){int n=4,a[10][10]; for(int i=0;i\u003cn;i++){a[i][0]=a[i][i]=1; for(int j=1;j\u003ci;j++) a[i][j]=a[i-1][j-1]+a[i-1][j]; for(int j=0;j\u003c=i;j++) printf(\"%d \",a[i][j]); puts(\"\");}}","Python":"n = 4\nrow = [1]\nfor _ in range(n):\n  print(*row)\n  row = [1] + [row[i]+row[i+1] for i in range(len(row)-1)] + [1]","Java":"public class Pas {\n  public static void main(String[] a){int n=4; int[][] x=new int[n][n]; for(int i=0;i\u003cn;i++){x[i][0]=x[i][i]=1; for(int j=1;j\u003ci;j++) x[i][j]=x[i-1][j-1]+x[i-1][j]; for(int j=0;j\u003c=i;j++) System.out.print(x[i][j]+\" \"); System.out.println();}}\n}"}},{"no":29,"name":"Palindrome Check","desc":"Verifies whether a string reads the same forwards and backwards.","output":"Palindrome","code":{"C":"#include \u003cstdio.h\u003e\n#include \u003cstring.h\u003e\nint main(){char s[]=\"madam\"; int n=strlen(s),ok=1; for(int i=0;i\u003cn/2;i++) if(s[i]!=s[n-1-i]) ok=0; puts(ok?\"Palindrome\":\"No\");}","Python":"s = \"madam\"\nprint(\"Palindrome\" if s == s[::-1] else \"No\")","Java":"public class Pal {\n  public static void main(String[] a){String s=\"madam\"; System.out.println(s.equals(new StringBuilder(s).reverse().toString()) ? \"Palindrome\" : \"No\");}\n}"}},{"no":30,"name":"Basic File Text Simulation","desc":"Simulates basic output streaming logic mirroring system writing operations.","output":"[File Write Success]: Reference Log Entry Created","code":{"C":"#include \u003cstdio.h\u003e\nint main(){ printf(\"[File Write Success]: Reference Log Entry Created\\n\"); return 0; }","Python":"print(\"[File Write Success]: Reference Log Entry Created\")","Java":"public class FileSim {\n  public static void main(String[] a){ System.out.println(\"[File Write Success]: Reference Log Entry Created\"); }\n}"}}],
    typing: [{"title":"Hello World","lang":"C","text":"#include \u003cstdio.h\u003e\nint main(){ printf(\"Hello, World!\\n\"); return 0; }"},{"title":"Hello World","lang":"Python","text":"print(\"Hello, World!\")"},{"title":"Hello World","lang":"Java","text":"public class Hi { public static void main(String[] a){ System.out.println(\"Hello, World!\"); } }"},{"title":"For Loop 0..9","lang":"C","text":"for (int i = 0; i \u003c 10; i++) printf(\"%d\\n\", i);"},{"title":"List Comprehension","lang":"Python","text":"squares = [x*x for x in range(10)]"},{"title":"Enhanced for","lang":"Java","text":"for (int v : arr) System.out.println(v);"}],
    debug: [{"title":"Off-by-one in loop","lang":"C","broken":"for (int i = 0; i \u003c= n; i++)\n  sum += a[i]; // reads a[n] out of bounds","fixed":"for (int i = 0; i \u003c n; i++)\n  sum += a[i];","hint":"Array indices run 0 .. n-1."},{"title":"Mutable default argument","lang":"Python","broken":"def push(x, bag=[]):\n  bag.append(x)\n  return bag","fixed":"def push(x, bag=None):\n  bag = [] if bag is None else bag\n  bag.append(x)\n  return bag","hint":"Default lists are created once and shared between calls."},{"title":"String equality with ==","lang":"Java","broken":"if (name == \"admin\") { grant(); }","fixed":"if (\"admin\".equals(name)) { grant(); }","hint":"== compares references; use .equals for value equality."},{"title":"Missing free()","lang":"C","broken":"int *p = malloc(sizeof(int) * 100);\n// use p ... function returns without free","fixed":"int *p = malloc(sizeof(int) * 100);\n// ... use p ...\nfree(p);","hint":"Every malloc needs a matching free."},{"title":"Integer division surprise","lang":"Python","broken":"avg = sum(nums) / len(nums)  # OK in 3, but int cast loses precision:\navg = int(sum(nums) / len(nums))","fixed":"avg = sum(nums) / len(nums)  # true division stays a float","hint":"Cast only when you truly need an integer."}],
    quiz: [{"q":"Who designed the C programming language?","options":["Guido van Rossum","Dennis Ritchie","James Gosling","Bjarne Stroustrup"],"answer":1,"explain":"Dennis Ritchie created C at Bell Labs in 1972."},{"q":"Which C stage expands macros and includes headers?","options":["Compilation","Assembly","Preprocessing","Linking"],"answer":2,"explain":"Preprocessing runs first, before compilation."},{"q":"Python source files are executed as…","options":["Native machine code","JVM bytecode","CPython bytecode on a VM","Assembly"],"answer":2,"explain":".py compiles to .pyc bytecode run by the CPython VM."},{"q":"Which is NOT a pillar of Java OOP?","options":["Encapsulation","Concurrency","Inheritance","Polymorphism"],"answer":1,"explain":"The four pillars are Encapsulation, Inheritance, Polymorphism, Abstraction."},{"q":"How does Python reclaim unused memory?","options":["Manual free()","Reference counting + GC","Stack pop","JIT"],"answer":1,"explain":"CPython uses reference counting and a cyclic garbage collector."},{"q":"Which C call requests heap memory?","options":["stack()","malloc()","new()","alloc[]"],"answer":1,"explain":"malloc/calloc allocate on the heap; free releases it."},{"q":"JVM converts hot paths to native code via…","options":["AOT","JIT","GCC","Bytecode interpreter only"],"answer":1,"explain":"The Just-In-Time compiler is part of the JVM."},{"q":"Time complexity of binary search on n sorted items?","options":["O(n)","O(log n)","O(n log n)","O(1)"],"answer":1,"explain":"Binary search halves the range each step."},{"q":"153 is famously a…","options":["Prime","Palindrome","Armstrong number","Perfect number"],"answer":2,"explain":"1³ + 5³ + 3³ = 153."},{"q":"Which loop guarantees at least one execution?","options":["for","while","do…while (C/Java)","None"],"answer":2,"explain":"do…while tests the condition after the body."}]
  };
  const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

  /* Tabs */
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.querySelector('[data-panel="'+btn.dataset.tab+'"]').classList.add("active");
      window.scrollTo({top:0,behavior:"smooth"});
    });
  });

  /* Programs */
  let curLang = "C";
  const progHost = document.getElementById("programs");
  function renderPrograms(){
    progHost.innerHTML = DATA.programs.map(p => `
      <details>
        <summary><span class="num">${p.no}</span><span>${esc(p.name)}</span><span class="chev">›</span></summary>
        <div class="body">
          <p class="muted" style="margin:6px 0 8px">${esc(p.desc)}</p>
          <div class="row" style="margin-bottom:6px"><span class="badge b-${curLang}">${curLang}</span></div>
          <pre><code>${esc(p.code[curLang])}</code></pre>
          <p class="muted"><b>Output:</b> <code>${esc(p.output)}</code></p>
        </div>
      </details>`).join("");
  }
  renderPrograms();
  document.querySelectorAll("#langTabs button").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll("#langTabs button").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      curLang = b.dataset.lang;
      renderPrograms();
    });
  });

  /* Typing */
  let tIdx = 0;
  const tTarget = document.getElementById("tTarget");
  const tInput = document.getElementById("tInput");
  const tTitle = document.getElementById("tTitle");
  const tLang = document.getElementById("tLang");
  const tAcc = document.getElementById("tAcc");
  const tDone = document.getElementById("tDone");
  function loadDrill(){
    const d = DATA.typing[tIdx];
    tTitle.textContent = d.title;
    tLang.textContent = d.lang; tLang.className = "badge b-" + d.lang;
    tInput.value = ""; tDone.style.display = "none";
    renderTarget();
    document.querySelectorAll("#tList .card").forEach((c,i) => c.style.outline = i===tIdx ? "2px solid #6366f1" : "none");
  }
  function renderTarget(){
    const d = DATA.typing[tIdx], typed = tInput.value;
    let html = "", correct = 0;
    for (let i=0;i<d.text.length;i++){
      const ch = d.text[i], t = typed[i];
      const cls = t==null ? "pending" : t===ch ? "ok" : "bad";
      if (t===ch) correct++;
      html += '<span class="'+cls+'">' + esc(ch === " " ? "·" : ch === "\n" ? "↵\n" : ch) + '</span>';
    }
    tTarget.innerHTML = html;
    const acc = typed.length ? Math.round(correct/typed.length*100) : 100;
    tAcc.textContent = acc + "%";
    if (typed === d.text){ tDone.style.display = "inline"; }
  }
  tInput.addEventListener("input", renderTarget);
  document.getElementById("tReset").addEventListener("click", () => { tInput.value=""; renderTarget(); tInput.focus(); });
  document.getElementById("tNext").addEventListener("click", () => { tIdx = (tIdx+1) % DATA.typing.length; loadDrill(); tInput.focus(); });
  document.getElementById("tList").innerHTML = DATA.typing.map((d,i) => `
    <div class="card" style="cursor:pointer" data-i="${i}">
      <div class="row" style="justify-content:space-between">
        <span style="font-weight:600">${esc(d.title)}</span>
        <span class="badge b-${d.lang}">${d.lang}</span>
      </div>
    </div>`).join("");
  document.querySelectorAll("#tList .card").forEach(c => c.addEventListener("click", () => { tIdx = +c.dataset.i; loadDrill(); }));
  loadDrill();

  /* Debug */
  document.getElementById("debugList").innerHTML = DATA.debug.map((d,i) => `
    <div class="card">
      <div class="row" style="justify-content:space-between;margin-bottom:6px">
        <h3 style="margin:0">#${i+1} · ${esc(d.title)}</h3>
        <span class="badge b-${d.lang}">${d.lang}</span>
      </div>
      <div style="font-size:.7rem;font-weight:700;color:#fda4af;text-transform:uppercase;letter-spacing:.05em;margin-top:6px">Broken</div>
      <pre><code>${esc(d.broken)}</code></pre>
      <p class="muted"><b>Hint:</b> ${esc(d.hint)}</p>
      <div data-fix="${i}" style="display:none">
        <div style="font-size:.7rem;font-weight:700;color:#6ee7b7;text-transform:uppercase;letter-spacing:.05em;margin-top:6px">Fixed</div>
        <pre><code>${esc(d.fixed)}</code></pre>
      </div>
      <button class="btn" data-reveal="${i}">Reveal fix</button>
    </div>`).join("");
  document.querySelectorAll("[data-reveal]").forEach(b => b.addEventListener("click", () => {
    const i = b.dataset.reveal;
    document.querySelector('[data-fix="'+i+'"]').style.display = "block";
    b.style.display = "none";
  }));

  /* Quiz */
  let qI = 0, qScore = 0, qPicked = null;
  const qText = document.getElementById("qText"), qOpts = document.getElementById("qOpts"), qMeta = document.getElementById("qMeta"), qScoreEl = document.getElementById("qScore"), qBar = document.getElementById("qBar"), qNext = document.getElementById("qNext"), qWhy = document.getElementById("qWhy"), qCard = document.getElementById("quizCard");
  function renderQuiz(){
    if (qI >= DATA.quiz.length){
      qCard.innerHTML = `<div style="text-align:center;padding:20px">
        <div style="font-size:2.4rem;font-weight:800;color:#fbbf24">${qScore} / ${DATA.quiz.length}</div>
        <p class="muted">${qScore===DATA.quiz.length?"Perfect score. Compiler-tier focus.":qScore>=DATA.quiz.length*.7?"Strong run. A quick review will lock it in.":"Fair start — revisit the Theory tab and try again."}</p>
        <button class="btn" onclick="location.reload()">Restart quiz</button>
      </div>`;
      return;
    }
    const q = DATA.quiz[qI]; qPicked = null;
    qMeta.textContent = "Question " + (qI+1) + " / " + DATA.quiz.length;
    qScoreEl.textContent = "Score: " + qScore;
    qBar.style.width = ((qI)/DATA.quiz.length*100) + "%";
    qText.textContent = q.q;
    qWhy.style.display = "none"; qNext.style.display = "none";
    qOpts.innerHTML = q.options.map((o,idx) => `<button class="quiz-opt" data-i="${idx}"><span>${esc(o)}</span></button>`).join("");
    qOpts.querySelectorAll(".quiz-opt").forEach(btn => btn.addEventListener("click", () => {
      if (qPicked!=null) return;
      qPicked = +btn.dataset.i;
      qOpts.querySelectorAll(".quiz-opt").forEach((b,idx) => {
        b.disabled = true;
        if (idx === q.answer) b.classList.add("correct");
        else if (idx === qPicked) b.classList.add("wrong");
      });
      if (qPicked === q.answer) qScore++;
      qScoreEl.textContent = "Score: " + qScore;
      qWhy.innerHTML = "<b>Why:</b> " + esc(q.explain); qWhy.style.display = "block";
      qNext.style.display = "inline-flex";
      qNext.textContent = (qI+1 === DATA.quiz.length ? "Finish" : "Next") + " →";
    }));
  }
  qNext.addEventListener("click", () => { qI++; renderQuiz(); });
  renderQuiz();

// PWA service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function (err) {
      console.warn('SW registration failed:', err);
    });
  });
}
