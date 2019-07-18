import csv
#import codecs

from collections import defaultdict

def build_dict(source_file):
    products_list = defaultdict(dict)
    headers = ['PRODUCT_ID', 'CATEGORY','SUBCATEGORY','PRODUCT_NAME', 'DISC_P','UNIT_PRICE','UOM', 'SHIPPING','UNIT_COST']
    with open(source_file, 'r',newline='') as csvfile:
        contents = csv.DictReader(csvfile, fieldnames=headers, dialect='excel',
                                skipinitialspace=True)
        for rowdict in contents:
            if None in rowdict:
                del rowdict[None]
            category = rowdict.pop("CATEGORY")
            subcategory = rowdict.pop("SUBCATEGORY")
           # productid = rowdict.pop("PRODUCT_ID")
           # productname = rowdict.pop("PRODUCT_NAME")
            products_list[category][subcategory] = rowdict#[productid][productname] = rowdict
    return dict(products_list)

source_file = 'product_list.csv'
print(build_dict(source_file))

#import csv

#products = {}
#with open("product_list.csv", 'r') as data_file:
#    contents = csv.DictReader(data_file, delimiter=",")
#    for row in contents:
#        item = products.get(row["PRODUCTID"], dict())
#        item[row["BID"]] = int(row["R"])
#
#        new_data_dict[row["UID"]] = item
#
#print new_data_dict

#import csv
#csvfile = open('product_list.csv', "rb")
#contents = csv.reader(codecs.itercode(csvfile, 'utf-8'))
#rownum = 0
#td = {'j': 0, 'f': 0, 'm': 0}
#d = {}
#for row in reader:
#    # Save header row.
#    if rownum == 0:
#        header = row
#    else:
#        for c, col in enumerate(row):
#            if c != 0:
#                td[header] = col
#        d[row[0]] = td

#import csv

#products={}
#with open('product_list.csv','rb')as csvfile:
#    contents=csv.DictReader(csvfile,delimiter=",")
#    for row in contents:
#        dict_productid=new_dict.get(row['ProductID'],dict())
#        dict_brand[row['Product']]={k:row[k] for k in ('Cost','Price')}
#        new_dict[row['Brand']]=dict_brand
#print new_dict


#rownum = 0
#td = {'j': 0, 'f': 0, 'm': 0}
#products = {}
#with open('product_list.csv', 'r',newline='') as csvfile:    
#    contents = csv.reader(csvfile)
#    for row in contents:
#        data[row[0]] = dict(zip(row[1::2], map(int,row[2::2])))


#csvfile  = open('product_list.csv', "rb")
#contents = csv.reader(codecs.iterdecode(csvfile, 'utf-8'))
#products = {}
#for row in contents:
#    products [row[0]] = {
#        'category'     : row[1],	
#        'subcategory' : row[2],	
#        'product_name' : row[3],	
#        'disc_percent'  : row[4],	
#        'unit_selling_price' : row[5],
#        'UOM' : row[6],
#        'Shipping' : row[7],	
#        'Unit_Cost' : row[8]        
#        }
#    for category in products:
#        category [row[1]] = {
#            'subcategory' : row[2],	
#            'product_name' : row[3],	     
#            }}
#    print(f'Header: {contents.fieldnames}')    

#print(category[])

