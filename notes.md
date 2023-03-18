colors di tailwind Config biar lebih kebaca dibuat array dengan key adalah number
ex:

```
neutral: {
  50: '#F8FAFC',
  ....
}
```

nama commit harus bisa lebih terbaca

Jangan buat nama component yang sama dengan library. Contoh di component <Route/> pada './routes/MainRoute'. Kalo bisa diubah aja jadi <AppRoute/>

Install prettier extension => buat file .prettierrc untuk config prettier. Biar kodingan lebih rapih

Dropdown itu bukan layout, melainkan component. Layout adalah React Component yang berskala besar contohnya Nav, Footer, Sidebar, Main, dkk.

Gausah buat 2 component button berbeda. PrimaryButton sama OtherButton jadiin satu, tapi di passing props

Nav icon tambahin navigate to home

Ada beberapa data yang get dari BE itu null/undefined. Tambahin handle bisa pake optional chaining

`id = useParams()` itu di destructuring dulu agar lebih readable

Buat function handle atau eksternal. Jangan ditumpuk di onClick agar struktur component itu lebih kebaca

`<DataPribadi/>` itu ada comment setengah file
