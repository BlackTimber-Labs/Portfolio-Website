name = "Subham"
name1 = "Marshaxl"
paragraph = '''This is
a multiline
paragraph.
This is for testing'''
print(name)
print(paragraph)
#indexing
print(name[0])
print(name[-1])
if name[0] == name[-6]:
    print("True")
#Slicing
print(name[1:3])
print(name[:3])
print(name[3:])
print(name[-3:])
print(name[:-3])

print(name[::3])
print(name1[0:5:2])
print(name1[::-1])
print(name1[6:1:-2])
#loops in string
letter = 'abcdefghijklmnopqrstuvwxyz'
for i in letter:
    if(i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u'):
        print(i,end=" is a vowel")
        print()
#String methods

password = "password"
password1 = "password21"
a = password.isalpha()
b = password.isalnum()
c = password.isnumeric()
d = password.islower()
print(a)
print(b)
print(c)
print(d)  
print('password1.isalpha',password1.isalpha())
print('password1.isalnum',password1.isalnum())
print('password1.isnumeric',password1.isnumeric())
print('password1.islower',password1.islower())
print('password1.isupper',password1.isupper())

s = '   oo  '
print(s.strip())
print(s.lstrip())
print(s.rstrip())
print(s.upper())

