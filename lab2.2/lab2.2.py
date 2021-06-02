import numpy as np
import matplotlib.pyplot as plt

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


signal = generator(n, Wmax, N)

plt.plot(range(N), FFT(signal))
plt.xlabel("p")
plt.ylabel("FFT")
plt.show()