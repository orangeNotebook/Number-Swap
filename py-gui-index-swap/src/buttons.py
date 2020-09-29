from tkinter import *
from app import secondInput


def createButtons(window, list):
    for i in range(15):
        btn = Button(window, text=(list[i]),
                     command=lambda i=i: [secondInput(i, window, list), btn.destroy])
        btn.grid(column=i, row=1)


def createInactiveButtons(window, list):
    for i in range(15):
        btn = Button(window, text=(list[i]), stat=DISABLED)
        btn.grid(column=i, row=0)
