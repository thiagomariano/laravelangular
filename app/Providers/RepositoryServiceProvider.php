<?php

namespace SistemaIntegradoIgrejas\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            \SistemaIntegradoIgrejas\Repositories\UserRepository::class,
            \SistemaIntegradoIgrejas\Repositories\UserRepositoryEloquent::class
        );
        $this->app->bind(
            \SistemaIntegradoIgrejas\Repositories\ColetorRepository::class,
            \SistemaIntegradoIgrejas\Repositories\ColetorRepositoryEloquent::class
        );
    }
}
