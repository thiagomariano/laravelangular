<?php

use Illuminate\Database\Seeder;
use SistemaIntegradoIgrejas\Entities\User;
use SistemaIntegradoIgrejas\Entities\Client;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'name' => 'Admin',
            'email' => 'thiagomarianodamasceno@gmail.com',
            'password' => bcrypt('Thiagoq1w2'),
            'role' => 'admin',
            'remember_token' => str_random(10),
        ])->clients()->save(factory(Client::class)->make());
    }
}

