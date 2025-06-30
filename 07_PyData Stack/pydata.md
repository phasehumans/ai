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
- 