<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TodoController;
use App\Http\Controllers\API\UserController;

Route::controller(UserController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/register', 'register');
    Route::post('/logout', 'logout')->middleware('auth:sanctum');
});

Route::group(['prefix' => 'todos', 'middleware' => 'auth:sanctum'], function () {
    Route::controller(TodoController::class) ->group(function () {
        Route::get('/', 'index');
        Route::post('/add','add');
        Route::get('/edit/{id}', 'edit');
        Route::post('/update/{id}', 'update');
        Route::delete('/delete/{id}', 'delete');
    });
});
