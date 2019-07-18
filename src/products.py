#Define products dictionary from extracted (scraped) product_list.csv
import csv

from collections import defaultdict
products_list = {}
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





