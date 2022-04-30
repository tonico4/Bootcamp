def num_primo(numero, n = 2):
    if n >= numero:
        print(numero, 'es primo')
    elif numero % n !=0:
        return num_primo(numero, n + 1)
    else:
        print(numero, 'no es primo')

num_primo(357)