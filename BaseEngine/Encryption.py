from array import*
import numpy as np
from PIL import Image
from pymongo import MongoClient
import requests


client=MongoClient('localhost', 27017)
  

  
# Access database
mydatabase = client["User-details"]
  
# Access collection of the database
mycollection=mydatabase["users"]
count = 0
count1 = mydatabase.users.count()
count = count1

myquery = mydatabase.users.find({},{"message":1})
#print(myquery[count1-1].values)




while count <= count1:
    count1 = mydatabase.users.count()
    print("searching for data.......")
    if count < count1:  
        Message = myquery[count1-1].get("message")
        print(Message)
        
        
        #converting to ascii
        base_list = list(Message)
        ascii_list = []
        for ele in base_list:
            ascii_list.extend(ord(num) for num in ele)
            ascii_array = np.array(ascii_list)

        #converting to binary
        binary_list = []
        vals = array('i', ascii_array)
        for i in range(len(ascii_array)):
            binary=format(vals[i], '08b')
            binary_list.append(binary)

        #Reading image using PIL
        img_test = Image.open(r"C:\Users\TUSHAR JHA\Desktop\Project\test.png")  
        h, w = img_test.size
        
        #getting pixels data
        pixels = list(img_test.getdata())

        #seperating RGBA values
        row = len(pixels)
        col = len(pixels[0])
        blue = []
        red = []
        green = []
        gradient = []

        for i in range(0, row):
            for j in range(2, col, 2):
                blue.append(pixels[i][j])

        for i in range(0, row):
            for j in range(0, col-3):
                red.append(pixels[i][j])

        for i in range(0, row):
            for j in range(1, col-2):
                green.append(pixels[i][j])

        for i in range(0, row):
            for j in range(3, col):
                gradient.append(pixels[i][j])

        #Converting value of blue to binary
        bin_data = []
        for i in range(0,len(blue)):
            binary_data = format(blue[i], '08b')
            bin_data.append(binary_data)


        #Applying LSB Manipulation
        count=0
        Manipulate_list=[]
        i = 0
        j = 0
        Null_value = ['10000000']
        k = 0
        n = 0
        while i < len(bin_data):
            m=int(bin_data[i])   
            pos_nums = []
            while m != 0:
                pos_nums.append(m % 10)
                m = m // 10 
            pos_nums.reverse()
        
            if(len(pos_nums)<8):
                while len(pos_nums) < 8:
                    pos_nums.insert(0,0)

    
            if j < len(binary_list):
                pos_nums[7]=int(binary_list[j][count])
                if count<7:
                    count += 1
        
                elif count==7:
                    count=0
                    j += 1
        
            elif n < len(Null_value[0]):
                pos_nums[7] = int(Null_value[k][n])
                if n<8:
                    n += 1

            Manipulate_value = [str(int) for int in pos_nums]
    
            pos_nums.clear()
            Manipulate_list.append(''.join(Manipulate_value))
            i = i+1

        #Binding RGBA value of Final Image
        Final_Img = []
        Manipulate_data = []
        for i in range(0, len(Manipulate_list)):
            integer = int(Manipulate_list[i], 2)
            Manipulate_data.append(integer)

        Final_Img = list(zip(red,green,Manipulate_data,gradient))

    
        #Generating Final Image
        Fin_Img = Image.new(img_test.mode, img_test.size)
        Fin_Img.putdata(Final_Img)
        Fin_Img.save("hide.png")
        #file = "solution1.png"
        
    

        url = 'http://192.168.43.178:3000/SEDSuite/images/'
        files = {'profile': open('hide.png', 'rb')}
        requests.post(url, files=files)
        #Fin_Img.show()
        #print(x.text)


        count = count1





