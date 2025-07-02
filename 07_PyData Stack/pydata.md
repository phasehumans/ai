# Numpy
maths and stats fn  
array manipulation & operations  

### Array creation
- np.array()
- np.random.rand(size)  
- np.random.randint(0,10, size= 5)  
- np.zeros()
- np.ones()
- np.empty()
- np.arange(start, stop, step, dtype=None)


### Datatypes
- integer --> int8, int16, int32, and int64 (bit-size)
- float --> float16, float32, and float64
- complex --> complex64 and complex128
- boolean --> np.bool_
- str --> dtype= str
- object --> dtype= object

type conversion --> var.astype(datatype) 

### Indexing & Slicing

Attributes:
- size - returns number of elements in the array
- dtype - returns data type of elements in the array
- itemsize - returns the size (in bytes) of each elements in the array
- reshape - changes the shape of the array to the desired dimensions
- ndim - dimension of arr


Indexing:
- arrray[index]
- array[row,col]
- array[]

Slicing:
- array[start:stop:step]
- mask --> filter to create sub array

### Operations
element wise operations (0,1 + 0,1)

- arthmetic : + - * / % (elmt wise oprt)
- np.sum()
- np.prod()
- np.cumsum() --> sum of the current and all previous elements.
- np.cumprod()
- np.add()
- np.substract()
- np.multiply()
- np.divide()
- < > >= <= == != (elmt wise)
- np.logical_and, 
- np.logical_or
- np.logical_not
- np.logical_xor

### Statistical fn
- np.mean() --> avg
- np.median()
- np.var() --> The average of the squared differences from the mean
- np.std() --> The square root of the variance, representing the dispersion of the data
- np.min() --> smallest value in arr
- np.max() --> largest value in array
- np.percentile() --> a score in the k-th percentile would be above approximately k% of all scores in its set

### String fn
- np.char.add()
- np.char.multiply()
- np.char.capitalize()
- np.char.title()
- np.char.lower()
- np.char.upper()
- np.char.split() --> split into lst
- np.char.splitlines()
- np.char.join(separator, arr)
- np.char.find(arr, substring)
- np.char.rfind() ->  returns the highest index in each string where the substring is found. If the substring is not found, it returns -1
- np.char.strip() --> remove white spaces
- np.char.isdigit()
- np.char.isalpha()
- np.char.isnumeric()
- np.column_stack() --> join col


### Broadcasting
- Rule 1: If the arrays do not have the same rank, prepend the shape of the smaller array with ones until both shapes have the same length.
- Rule 2: The size in each dimension of the output shape is the maximum size in that dimension of the input shapes.
- Rule 3: An array can be broadcast across another array only if the size of the dimension in the array is 1 or matches the size of the dimension in the other array.


### Matrix
- np.transpose() --> row to col
- np.linalg.inv()
- np.dot()

### Set operations
- np.unique() ---> returns the sorted unique elements of an array.
- np.intersect1d --> returns the sorted, unique values that are in both of the input arrays
- np.union1d --> returns the sorted, unique values that are in either of the input arrays
- np.setdiff1d --> returns the sorted, unique values in array1 that are not in array2
