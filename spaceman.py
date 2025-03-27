import random

def func():
    names = ["Apple", "Mango", "Orange"]
    name = random.choice(names).lower()
    n = 7
    d = {}
    for i in range(len(name)):
        if name[i] in d:
            d[name[i]].append(i)
        else:
            d[name[i]]=[i]
    ans = ["_"]*len(name)
    print("Guess the word: "+ "".join(ans))
    for i in range(1,n+1):
        guess = input(f"Guess the letter, attempt: {i} ")
        if guess in d:
            for i in d[guess]:
                ans[i] = guess
            output = "".join(ans)
            print(output)
        else:
            print("wrong guess")
        if output == name:
            return True
    return False

if func():
    print("You win!")
else:
    print("Try again")