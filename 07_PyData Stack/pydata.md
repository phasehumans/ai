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
- reshape - changes the shape of the array to the desired dimensions.


Indexing:
- arrray[index]
- array[row,col]
- array[]

Slicing:
- array[start:stop:step]
- mask --> filter to create sub array


