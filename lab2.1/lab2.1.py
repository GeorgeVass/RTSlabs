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


def DTF(signal):
	result = np.zeros(len(signal))
	for p in range(len(signal)):
		sum = 0
		for k in range(len(signal)):
			angle = 2 * np.pi * p * k / len(signal)
			turn_coef = complex(np.cos(angle), -np.sin(angle))
			sum += signal[k] * turn_coef
		result[p] = abs(sum)
	return result

sig = generator(n, Wmax, N)

DFT = DTF(sig)

plt.plot(range(N), DFT)
plt.xlabel("p")
plt.ylabel("DFT")
plt.show()