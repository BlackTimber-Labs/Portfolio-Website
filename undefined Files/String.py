fout=open('string.txt','a')
st=input('Enter any string:--')
fout.write(st)
fout.write("\n")
print('string added successfully!!!')
fout.close()'''

def line():
    fin=open('string.txt','r')
    print('stored stind in line was:--')
    st=''
    while st:
        st=fin.readline()
        print(st)
    fin.close()
line()
