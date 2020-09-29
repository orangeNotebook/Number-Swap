from tkinter import *
import buttons


def secondInput(n1, window, list):
    for i in range(15):
        if i == n1:
            btn = Button(window, text=(list[i]), state=DISABLED)
            btn.grid(column=i, row=1)
        else:
            btn = Button(window, text=(list[i]),
                         command=lambda i=i: [swapNumbers(n1, i, list, window), btn.destroy])
            btn.grid(column=i, row=1)


def swapNumbers(n1, n2, list, window):
    firstIndex = list[n1]
    secondIndex = list[n2]
    list[n1] = secondIndex
    list[n2] = firstIndex
    buttons.createButtons(window, list)
