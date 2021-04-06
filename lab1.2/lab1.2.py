import numpy as np
import matplotlib.pyplot as plt
import functions
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

signal1  = signGen(number,w,N)
signal2 = signGen(number,w,N)

print('Мат. очікування:', np.average(signal1))
print('Дисперсія:', np.var(signal1))

def output():
    plt.plot(signal1)
    plt.plot(signal2)
    plt.title('Випадково сгенерованні сигнали')
    plt.xlabel('Час')
    plt.ylabel('Сигнал')
    plt.figure()

    plt.plot(functions.autocorrFunc(signal1))
    plt.title('Автокорреляція')
    plt.xlabel('Час')
    plt.ylabel('Корреляція')
    plt.figure()

    plt.plot(functions.corrFunc(signal1, signal2))
    plt.title('Взаїмна корреляція')
    plt.xlabel('Час')
    plt.ylabel('Корреляція')
    plt.show()
    return

output()
