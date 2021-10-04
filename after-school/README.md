## Task
Build an arkwork catalog website with [Art Institute of Chicago API](https://api.artic.edu/docs/)\
You can use any web frameworks.

## Requirements

### 1. Artwork information
The website should be able to show at least the titles and images of the artworks. Images can be shown together within a list view or placed in the individual page of an art piece.

### 2. Searching
The website should support keyword search to filter artworks.

### 3. Pagination
A pagination system should be implemented to display a reasonable number of items each page.

### 4. Docker
The application should be built as a docker image and can be run as a docker container.

### 5. ReadMe
Please include a ReadMe file to state what troubles did you face when you were doing this skill test.


Issue:

1. Pictures have different height and weight which is called from API, 
I use black backgound color to solve the problem ,
make them display consistently, 
but the finally decision have to discuss.

2. Pictures title have different length, 
I set title height, and use '…' to replace the overflow words, 
but the finally decision have to discuss.

3. This is my first time use Docker, 
After studying online, docker image has been built successfully,
But If use docker conatiner can not read js, css path correctly, 
So this project has to be open in local index.html temporary,
And need more time to figure out this problem.


