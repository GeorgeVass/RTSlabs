import numpy as np
import matplotlib.pyplot as plt
from time import time

n = 14
Wmax = 2000
N = 256

def generator(n, Wmax, N):
	signal = np.zeros(N)
	W0 = Wmax / n
	for i in range(n):
		ampl = np.random.uniform(0.0, 1000.0)
		phase = np.random.uniform(-np.pi / 2, np.pi / 2)
		W = W0 * (i + 1)
		for time in range(N):
			signal[time] += ampl * np.sin(W * time + phase)
	return signal

def DFT(signal):
	result = np.zeros(len(signal))
	for p in range(len(signal)):
		sum = 0
		for k in range(len(signal)):
			angle = 2 * np.pi * p * k / len(signal)
			turn_coef = complex(np.cos(angle), -np.sin(angle))
			sum += signal[k] * turn_coef
		result[p] = abs(sum)
	return result

def FFT(signal):
	if len(signal) <= 1: return signal
	result = np.zeros(len(signal))
	even = FFT(signal[::2])
	odd = FFT(signal[1::2])
	for p in range(int(len(signal) / 2)):
		angle = 2 * np.pi * p / len(signal)
		turn_coef = complex(np.cos(angle), -np.sin(angle))
		result[p] = even[p] + turn_coef * odd[p]
		result[p + int(len(signal) / 2)] = even[p] - turn_coef * odd[p]
	return result



Ns = []
coefs = []
for i in range(5,11):
	N = 10 * i
	Ns.append(N)
	signal = generator(n, Wmax, N)
	start_dft = time()
	DFT(signal)
	elapsed_dft = time() - start_dft
	start_fft = time()
	FFT(signal)
	elapsed_fft = time() - start_fft
	coefs.append(elapsed_dft / elapsed_fft)

plt.plot(Ns, coefs)
plt.xlabel("N")
plt.ylabel("Коефіцієнт прискорення ")
plt.show()