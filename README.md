# laravel-vuex-crud
## Instalasi
```
1. git clone https://github.com/weenwe/laravel-vuex-crud.git
2. cd laravel-vuex-crud
3. composer install
4. ren .env.example .env (ubah nama file env.example menjadi .env)
5. php artisan key:generate
6. npm install
7. npm run dev
```
## Atur Database
```
//.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_crud
DB_USERNAME=root
DB_PASSWORD=
```
## Jalankan Migrasi Tabel
```php artisan migrate```

## Jalankan Aplikasi
```php artisan serve```

## Pembahasan
### [Belajar Vuex: CRUD Laravel + Vue + Vue Router dan Vuex](https://www.wahyunanangwidodo.com/2021/11/belajar-vuex-crud-laravel-vue-vue-router-dan-vuex.html)
