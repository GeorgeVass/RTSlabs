import numpy as np
import matplotlib.pyplot as plt
import functions
from time import time
number = 14
w = 2000
N = 256

def signGen(number,w,N):
    signals = np.zeros(N)
    W = w / number

    for harmonic in range(number):
        amplitude = np.random.rand()
        phase = np.random.rand()

        for time in range(N):
            signals[time] += (amplitude * np.sin(W * time + phase))
        W += W
    return signals

times1 = np.zeros(10)
times2 = np.zeros(10)
Ns = np.zeros(10)

for i in range(10):
    N = 100 * i
    Ns[i] = N

    signal1_list  = signGen(number,w,N)
    signal2_list = signGen(number,w,N)
    start = time()
    functions.corrFunc(signal1_list, signal2_list)
    end = time()
    times1[i] = end - start

    signal1_tuple  = tuple(signal1_list)
    signal2_tuple = tuple(signal2_list)
    start = time()
    functions.corrFunc(signal1_tuple, signal2_tuple)
    end = time()
    times2[i] = end - start


def output():
    plt.plot(Ns, times1, label='списки')
    plt.plot(Ns, times2, label='кортежі')
    plt.title('Порівняння часу виконання кореляційної функції при роботі з різними структурами даних')
    plt.xlabel('Кількість дискретних відліків(N)')
    plt.ylabel('Час виконання кореляційної функції')
    plt.legend()
    plt.show()
    return

output()