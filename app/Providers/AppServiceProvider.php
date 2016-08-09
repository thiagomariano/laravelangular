<?php

namespace SistemaIntegradoIgrejas\Providers;

use Illuminate\Support\Facades\Event;
use SistemaIntegradoIgrejas\Entities\Coletor;
use Illuminate\Support\ServiceProvider;
use SistemaIntegradoIgrejas\Events\TaskWasIncluded;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Coletor::created(function ($task) {
            die('entrou no evento mas não fez nada');
          Event::fire(new TaskWasIncluded($task));
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
