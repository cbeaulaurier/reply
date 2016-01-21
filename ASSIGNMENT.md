# Module Documentation

The below questions should be answered (in detail!) regarding your submission.

##### 1. Reflect on how you "learned" to use the library and write the examples, c.f the "Unfamiliar APIs" reading. What is one aspect of the module's code that made is easy to understand? What is one change that would have made it easier?
> The module was broken into only two main public functions, which is easy to use from the client perspective. However, the complicated question asking function, get, was broken down into a large number of smaller functions that each perform a very specific task. This made it much easier to understand the code, although it made it a bit more difficult to comment. It was easier to understand because the code was organized into small chunks with a unified purpose. If I understood what the code in a function did, it was one small building block on the way to understanding what the larger public function did. It made it a bit more difficult to comment because it creates some redundancy - there is the code that in the smaller function definition, but then that function has to be called somewhere else. Some of the smaller functions served only to call other functions, which is where I wasn't sure what to comment in which place (the function definiton or the method call). The code was generally fairly easy to understand, but the function dependencies_met was extremely confusing because the naming of variables wasn't very clear and there were no inline comments. Either (or ideally both) would have helped me make sense of that much more easily.


##### 2. Consider the process of writing comments that "raise the level of abstraction." What does this mean to you? If you had to explain to a new CS142 student how to write an effective comment, what would you say? #####
> To me, "raising the level of abstraction" means that the comments should answer some question that is either not able to be answered in the code, or could be much more easily answered through a comment. It should not include implementation details (something that is VERY important for any CSE142 student to know - CSE instructors are picky about this). But not including implementation details is only part of it. I didn't have an opportunity to explain why a design choice was made, mostly because this isn't my code and I don't know exactly why the developer decided to organize the code the way they did, but that's something that would raise the level of abstraction. Code can tell you how something is being done, but it won't tell you why. I'm also a fan of comments that tell you what the function does in succinct terms. What does the function do? What does the function need to work? What does it return? Does it only work in certain cases? I can figure all that out by reading the code, but reading a comment will help me use the function right away without slogging through all the details. That's raising the level of abstraction.


##### 3. Approximately how many hours did it take you to complete this assignment? #####
> Approximately three hours.


##### 4. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> None.


##### 5. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> This assignment was pretty straightforward. I do wish that the assignment description had a few more good comment/bad comment examples than the super obvious "simple description of the function" vs. "super bogged down in implementation details." That would help relieve some anxiety about whether the kinds of comments I'm writing are actually what you're looking for. And as much as the exercise of reading through and documenting someone else's code is boring, it's also useful because reading through someone else's code is a big part of developing software.
