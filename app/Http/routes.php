<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('app');
});

Route::post('oauth/access_token', function() {
    return Response::json(Authorizer::issueAccessToken());
});


Route::group(['middleware' => 'oauth'], function(){

    Route::resource('clients', 'ClientController', ['except' => ['create', 'edit']]);
    Route::resource('empresas', 'EmpresasController', ['except' => ['create', 'edit']]);
    Route::resource('pesquisas', 'PesquisasController', ['except' => ['create', 'edit']]);
    Route::resource('produtos', 'ProdutosController', ['except' => ['create', 'edit']]);
    Route::resource('coletores', 'ColetoresController', ['except' => ['create', 'edit']]);
    Route::resource('categorias', 'CategoriasController', ['except' => ['create', 'edit']]);
    Route::resource('itens-pesquisa', 'ItensPesquisaController', ['except' => ['create', 'edit']]);

    Route::get('user/authenticated', 'UserController@authenticated');

});