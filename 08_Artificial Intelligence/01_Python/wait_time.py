# wait time; delay to 2x and 5 attempts 

import time

wait_time=1
max_retries=5
attempt=0

while attempt<max_retries: # loop based on 2 var
    print("Attempt {} - Wait time is {}".format(attempt+1,wait_time))
    time.sleep(wait_time)
    wait_time= wait_time*2
    attempt= attempt+1