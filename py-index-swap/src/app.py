def inputHandler(n1, n2, list):

    firstIndex = list[n1 - 1]
    secondIndex = list[n2 - 1]
    list[n1 - 1] = secondIndex
    list[n2 - 1] = firstIndex
    getInput(list)


def getInput(list):
    print(list)
    swap1 = input("Number to swap or Q to exit: ")
    if swap1 == "Q":
        exit
    elif int(swap1) >= 16:
        print(swap1 + " does not exist in the list")
        getInput(list)
    else:
        swap2 = int(input("Swap " + swap1 + " with: "))
        if swap2 >= 16:
            print(swap2 + " does not exist in the list")
            getInput(list)
        else:
            inputHandler(int(swap1), swap2, list)
