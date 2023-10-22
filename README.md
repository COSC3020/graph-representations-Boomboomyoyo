[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12472911&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency list to an adjacency matrix for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency matrix to an adjacency list and
analyze it as above

# Response

I started with the matrix to list conversion, and orginally was representing lists as an array of sets. I got it working, then converted it by changing a couple lines of code to make represent the adjacency list as a array of arrays of variable size to work with the testing code you provided. I then also did the list to matrix conversion as well, because the first part I barely had to make any corrections to my original attempt. I then copied the test code and only slightly modified the testing condition, so it would take a matrix, convert it to a list, and pass it to my function to be converted back to a matrix. Overall, this was only a 20 minute problem for me. Now, for the runtime analysis.

The runtime for the conversion from an adjacency matrix to adjacency list is easy to calculate, as you simply iterate over the entire array once. This is a complexity of $\Theta\left(|V|^2\right)$, as the size of the array is simply vertices squared. For each row, I add simply one new array into the array of arrays, then for each edge, and another value to the row arrays specifying which vertex there is a connection to for the matrix.

The runtime for the conversion from an adjacency list to an adjacency matrix is a little bit more tricky to calculate. The way I have it set up starts similarly to my other conversion, with a for loop that iterates over each vertex in the graph. This is where it separates a bit. It then populates the adjacency matrix with $0$'s, and pushes all edge connections onto a stack. This stack keeps track of all the edges a node is connected to, which is processed after the matrix's row has been populated. Then, it is iterated over until all the edges have been transferred to the adjacency matrix. This then gives a total complexity of:

$O\left(|V(V+E)|\right)$
$ = O\left(|V^2+EV|\right)$

I feel like there is a way to specify this bound to be tighter, so I'm leaving this as Big O, not Big $\Theta$

# References

For array methods and set methods, respectively.
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_sets.asp