<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('landing');
});


Route::get('price-lists', function(){
    return response()->json([
        'bayi' => [
            'price_id' => 1,
            'price_name' => 'Bayi',
            'old_price' => '19.000',
            'new_price' => '14.900',
            'new_price_large' => '14',
            'new_price_small' => '900',
        ],
        'pelajar' => [
            'price_id' => 2,
            'price_name' => 'Pelajar',
            'old_price' => '46.900',
            'new_price' => '23.450',
            'new_price_large' => '23',
            'new_price_small' => '450',
        ],
        'personal' => [
            'price_id' => 3,
            'price_name' => 'Personal',
            'old_price' => '58.900',
            'new_price' => '38.900',
            'new_price_large' => '38',
            'new_price_small' => '900',
        ],
        'bisnis' => [
            'price_id' => 4,
            'price_name' => 'Bisnis',
            'old_price' => '109.900',
            'new_price' => '65.900',
            'new_price_large' => '65',
            'new_price_small' => '900',
        ]
    ]);
});