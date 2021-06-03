import numpy as np
import matplotlib.pyplot as plt
from time import time
number = 14 
w = 2000 
N = 256

times = np.zeros(10)
Ns = np.zeros(10)

for i in range(10):
    N = 100 * i
    Ns[i] = N
    signal = np.zeros(N)
    W = w / number

    start = time()
    for harmonic in range(number):
        amplitude = np.random.rand()
        phase = np.random.rand()
    
        for t in range(N):
            signal[t] += (amplitude * np.sin(W * t + phase))
        W += W
    end = time()
    times[i] = end - start

plt.plot(Ns, times)
plt.title('Залежність кількості дискретних відліків до часу генерації')
plt.xlabel('Кількість дискретних відліків(N)')
plt.ylabel('Час генерації')
plt.show()