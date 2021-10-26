
### `npm start`
Untuk memulai aplikasi ini

Jakmall FE-Test

1. Mencoba menulis pada 1 page, agar tidak ada reload page, render hanya pada saat submit dan tidak boros kode(apa bila dipisah menjadi 3 page dengan route ).
2. Data disimpan di local storage setelah submit sehingga data tidak hilang saat di refresh.
di halaman terakhir pada saat klik tombol back to home page data dihapus, dan di reload, sehingga state kembali ke awal.
3. Hampir seluruhnya menggunakan styled-component, hanya sedikit penggunaan css

User journey :
1. dimulai pengisian email, no tlp, dan alamat
2. dropshipper dapat di isi apabila checkbox di klik
lalu submit, pindah ke halaman payment
3. Pemilihan metode pengiriman dan pembayaran
(setiap pemilihan langsung di update di summary)
4. Selesai, user mendapat order id, dan dapat kembali ke halaman awal

Functionality : 100% done
Setiap isi form akan divalidasi secara inline, dimana :
    - hijau menandakan bahwa input sudah valid → DONE
    - Orange menandakan bahwa input tidak valid → DONE
Send as Dropshipper
    - Jika tidak dicentang, disable dan kosongkan form Dropshipper → DONE
    - Jika dicentang, form tersebut harus diisi dan akan dikenakan biaya Dropship Fee sebesar 5.900 → DONE
Phone Number:
    - Hanya boleh mengandung 0-9,-,+,(,) → DONE
    - Digit angka minimal 6 digit dan maksimal 20 digit → DONE
Address:
    - Harus diisi → DONE
    - Maksimal 120 digit → DONE
    - Terdapat counter angka yang menginformasikan jumlah digit yang tersisa secara real-time→ DONE
Email
    - Harus berupa isian email yang valid → DONE
Shipping
    - Harus dipilih → DONE
Delivery Estimate
    - JNE: 2 days, Go Send: today, Personal Courier: 1 day → DONE
Payment
    - Button akan berubah sesuai payment type yang dipilih → DONE
Go to homepage akan mengembalikan halaman ke step 1 seperti state awal
Order ID → DONE
Generate random 5 digit alphanumeric dengan pengecualian 1,I,0,O → DONE
