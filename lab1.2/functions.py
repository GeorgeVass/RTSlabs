import numpy as np      # math operations
import matplotlib.pyplot as plt     #graphs

def corrFunc(signalFirst, signalSec):

    result = []
    lngth = len(signalFirst) // 2
    mathExpect_1 = np.average(signalFirst)
    mathExpect_2 = np.average(signalSec)
    def_1, def_2 = np.std(signalFirst), np.std(signalSec)     #deflection

    for t in range(lngth):
        cov = 0     #covariance

        for l in range(lngth):
            cov += (signalFirst[l]-mathExpect_1)*(signalSec[l+t]-mathExpect_2) / (lngth)

        result.append((cov / def_1 * def_2))

    return result

def autocorrFunc(signal):
    return corrFunc(signal, signal)