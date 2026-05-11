# Tugas Minggu 11 - Association Rule (Praktikum Data Mining)

Materi: Praktikum Association Rule (PENS - Politeknik Elektronika Negeri Surabaya).
Dataset: `transaction.csv` (Online Retail style, kolom: `InvoiceNo, StockCode, Qty, InvoiceDate, CustomerID, Country`).

## Isi folder

- `transaction.csv` - dataset
- `association_rule.ipynb` - Jupyter notebook (paling enak untuk screenshot laporan)
- `association_rule.py` - skrip Python plain
- `README.md` - file ini

## Tugas

1. Load dataset `transaction.csv` dan tampilkan.
2. Ambil data untuk negara **Portugal**.
3. Buat tabel transaksi: 1 `InvoiceNo` = 1 transaksi, isi nya `StockCode`.
4. Cari association rule dengan `min_support = 0.2` dan `min_confidence = 0.7`.

## Cara menjalankan

```bash
pip install pandas mlxtend jupyter
# pilih salah satu:
python association_rule.py
# atau buka notebook:
jupyter notebook association_rule.ipynb
```

## Ringkasan hasil

- Dataset: 10.546 baris, 6 kolom.
- Data Portugal: 367 baris, 43 InvoiceNo unik, 140 StockCode unik.
- Tabel transaksi: 43 baris (transaksi) x 140 kolom (StockCode).
- Frequent itemsets (min_support = 0.2): 7 itemsets, terdiri dari StockCode `21928`, `21929`, `22411` dan kombinasinya.
- Association rules (min_confidence = 0.7): 12 rules. Sebagian besar punya confidence 1.0 dan lift > 3, artinya tiga StockCode itu sering dibeli bersamaan oleh pelanggan di Portugal.

## Library yang dipakai

- `pandas` - load CSV, group by, unstack
- `mlxtend.frequent_patterns.apriori` - cari frequent itemsets
- `mlxtend.frequent_patterns.association_rules` - generate association rules
