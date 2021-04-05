import numpy as np
import matplotlib.pyplot as plt
number = 14 
w = 2000 
N = 256
signal = np.zeros(N)
W = w / number

for harmonic in range(number):
    amplitude = np.random.rand()
    phase = np.random.rand()
    
    for time in range(N):
        signal[time] += (amplitude * np.sin(W * time + phase))
    W += W
print('Мат. очікування: ', np.average(signal))
print('Дисперсія: ', np.var(signal))
plt.plot(signal)
plt.title('Випадково сгенерованні сигнали')
plt.xlabel('Час(t)')
plt.ylabel('Сигнали')
plt.show()
