from array import*
import numpy as np
from PIL import Image

#opening image using PIL
img_test = Image.open(r"C:\Users\TUSHAR JHA\Desktop\Project\RestfulApi\uploads\profile.png")  
    
#getting pixel data
pixels = list(img_test.getdata())

#seperating  blue values from RGBA
row = len(pixels)
col = len(pixels[0])
blue = []
for i in range(0, row):
    for j in range(2, col, 2):
        blue.append(pixels[i][j])

#converting blue value to binary
bin_data = []
for i in range(0,len(blue)):
    binary_data = format(blue[i], '08b')
    bin_data.append(binary_data)


#Applying LSB decrypting algorithm
Complete_Message=[]
i = 0
j = 0
k = 0
pos_nums = []
while k != '10000000':
    while j < 8 and i != len(bin_data):
        m=int(bin_data[i])  
        if m != len(bin_data[i])-1:
            pos_nums.append(m % 10)
            m = 0
        j += 1 
        i += 1
    j = 0
    Message_bin_value = [str(int) for int in pos_nums]
    pos_nums.clear()
    Complete_Message.append(''.join(Message_bin_value))
    for k in Complete_Message:
        if k == '10000000':
            break


#converting binary to ASCII string
Message = ""
for i in range(0,len(Complete_Message)-1):

    an_integer = int(Complete_Message[i], 2)
    ascii_character = chr(an_integer)
    Message += ascii_character


print(Message)





 