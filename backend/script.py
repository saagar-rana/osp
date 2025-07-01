# # table=[]

# # # with open('output.csv', 'r') as file:
# # #     reader = csv.reader(file)
# # #     for row in reader:
# # #         table.append(row)

# # header = table[0]
# # header.append('serial_key')
# # for i in range(1, len(table)):
# #     table[i].append('123 Main St.')
# # import random
# # import string
# # set_length = 5
# # num_sets = 3

# import csv
# import datetime

# timetable = []
# with open('os_datetime.csv', 'r') as file:
#     reader = csv.reader(file)
#     for row in reader:
#         timetable.append(row)
# t=0
# for times in timetable:
#     t=times[0]
# print(t)
# dat = datetime.datetime(2023, 11, 2, 21, 16, 0)
# timetable.append(dat)

# with open('os_datetime.csv', 'w', newline='') as file:
#     writer = csv.writer(file)
#     for row in timetable:
#         writer.writerow([row])


# table = []
# with open('output.csv', 'r') as file:
#     reader = csv.reader(file)
#     for row in reader:
#         table.append(row)

# atable=[]
# with open('product_key.csv', 'r') as pfile:
#     reader=csv.reader(pfile)
#     for row in reader:
#         atable.append(row)



# temp=''
# for items in table:
#     if items[0]=='OMUPR-DFQ4H-R3L2Z':
#         print(items[0])
#         if items[1]=="None":
#             items[1]=atable[0][0]
#             atable.remove(atable[1])
#             temp=items[1]
#             print('thank god')
#             break
#         else:
#             temp=items[1]
#             print('are you kidding')
#             break
#     else:
#         temp='Invalid serial key'

    
# with open('product_key.csv', 'w', newline='') as file:
#     writer = csv.writer(file)
#     for row in atable:
#         writer.writerow(row)

# with open('output.csv', 'w', newline='') as file:
#     writer = csv.writer(file)
#     for row in table:
#         writer.writerow(row)

# # with open('output.csv', 'w', newline='') as file:
# #     writer = csv.writer(file)
# #     for row in table:
# #         writer.writerow(row)



 



# # for i in range(1, 150):
# #     key = '-'.join(''.join(random.choices(string.ascii_uppercase + string.digits, k=set_length)) for _ in range(num_sets))
# #     UP_KEY=[key.upper()]
# #     table.append(UP_KEY)
# # with open('output.csv', 'w', newline='') as file:
# #     writer = csv.writer(file)
# #     for row in table:
# #         print(row)
# #         writer.writerow(row)

# # with open('output.csv', 'r') as file:
# #     reader = csv.reader(file)
# #     for row in reader:
# #         table.append(row)

# # header = table[0]
# # header.append('ActivationKey')
# # for i in range(1, len(table)):
# #     table[i].append(None)

# # with open('output.csv', 'w', newline='') as file:
# #     writer = csv.writer(file)
# #     for row in table:
# #         writer.writerow(row)

# import csv

# atable=[]
# with open('keys.csv', 'r') as pfile:
#     reader=csv.reader(pfile)
#     for row in reader:
#         atable.append(row)



# import string
# import random

# key_length = 5
# characters = string.ascii_letters + string.digits
# table=[]
# total=len(table)
# print(total)
# while(total<60000):
#     found=0
#     keys = []   
#     for j in range(4):
#         key = ''.join(random.choices(characters, k=key_length))
#         key=key.upper()
#         keys.append(key)
#     sk='-'.join(keys)
#     for items in table:
#         if items==sk:
#             found=1
#             print("0")
#             break
#         else:
#             found=0
#             break
#     if found==0:
#         table.append(sk)
#         total=total+1
#         print("2")


# new_list = [item for i, item in enumerate(table) if item not in table[:i]]
# print(len(table))  # [1, 2, 3, 4, 5]
# print(len(new_list))

# with open('serial_keys_windows.csv', 'w', newline='') as file:
#     writer = csv.writer(file)
#     for key in table:
#         key_list = list(key)
#         writer.writerow([key])




# import re

# def extract_code(input_string):
#     pattern = r"office\s([A-Za-z0-9]+(?:-[A-Za-z0-9]+){2,4})"
#     match = re.search(pattern, input_string)
#     if match:
#         code = match.group()
#         return code
#     else:
#         return None
    
# input_str = "office OMUPR OMUPR DFQ4H R3L2Z"
# code = extract_code(input_str)
# print(code)  
# input_str = "oFFice OMUPR-DFQ4H"
# code = extract_code(input_str)
# print(code)  
# input_str = "Office OMUPR-DFQ4H-R3L2Z-R3L2Z"
# code = extract_code(input_str)
# print(code) 
# input_str = "offic OMUPR-DFQ4H-R3L2Z"
# code = extract_code(input_str)
# print(code) 

# import csv
# import yaml

# csv_file_path = "serial_keys_windows.csv"
# yaml_file_path = "serial_keys_windows.yaml"

# with open(csv_file_path, 'r') as csv_file:
#     reader = csv.reader(csv_file)
#     keys = [row[0] for row in reader]

# yaml_data = {key: {} for key in keys}

# with open(yaml_file_path, 'w') as yaml_file:
#     yaml.dump(yaml_data, yaml_file)

import csv

input_file = 'serial_keys_windows.csv'
output_file = 'serial_key.csv'

with open(input_file, 'r') as file_in, open(output_file, 'w', newline='') as file_out:
    reader = csv.reader(file_in)
    writer = csv.writer(file_out)

    for row in reader:
        writer.writerow([row[0], 'None'])
