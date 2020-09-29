from tkinter import *
from populate import populateList
import buttons


def createWindow():
    window = Tk()

    window.title("Index Swap")

    window.geometry('325x53')

    buttons.createInactiveButtons(window, list)
    buttons.createButtons(window, list)

    window.mainloop()


list = []
populateList(list)
createWindow()
