# Tugas Minggu 11 - Association Rule
# Mata Kuliah : Data Mining
# Dataset     : transaction.csv
# Tools       : Python (pandas + mlxtend)
#
# Cara jalanin:
#   pip install pandas mlxtend
#   python association_rule.py

import pandas as pd
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules


# 1) Load dataset transaction.csv dan tampilkan
dataset = pd.read_csv("transaction.csv")
print("=== 1) Dataset transaction.csv ===")
print("Jumlah baris :", dataset.shape[0])
print("Jumlah kolom :", dataset.shape[1])
print()
print(dataset)
print()


# 2) Ambil data untuk negara Portugal
data = dataset[dataset["Country"] == "Portugal"]
print("=== 2) Data negara Portugal ===")
print("Jumlah baris data Portugal :", data.shape[0])
print("Jumlah InvoiceNo unik      :", data["InvoiceNo"].nunique())
print("Jumlah StockCode unik      :", data["StockCode"].nunique())
print()
print(data)
print()


# 3) Buat tabel transaksi (1 InvoiceNo = 1 transaksi, isi nya StockCode)
transaksi = data.groupby(["InvoiceNo", "StockCode"])["Qty"].sum()
transaksi = transaksi.unstack().reset_index().fillna(0).set_index("InvoiceNo")
transaksi[transaksi > 0] = 1
transaksi = transaksi.astype(bool)  # mlxtend butuh tipe bool / 0-1
print("=== 3) Tabel Transaksi (baris=InvoiceNo, kolom=StockCode) ===")
print("Bentuk tabel transaksi :", transaksi.shape)
print()
print(transaksi)
print()


# 4) Cari association rule dengan min_support=0.2 dan min_confidence=0.7
frequent_itemsets = apriori(transaksi, min_support=0.2, use_colnames=True)
print("=== 4a) Frequent Itemsets (min_support = 0.2) ===")
print("Jumlah frequent itemsets :", len(frequent_itemsets))
print()
print(frequent_itemsets.sort_values("support", ascending=False))
print()

rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)
print("=== 4b) Association Rules (min_confidence = 0.7) ===")
print("Jumlah association rules :", len(rules))
print()
print(rules[["antecedents", "consequents", "support", "confidence", "lift"]]
      .sort_values("confidence", ascending=False))
