<?php
/**
 * Created by PhpStorm.
 * User: tarobinha
 * Date: 30/04/2016
 * Time: 23:19
 */

namespace SistemaIntegradoIgrejas\OAuth;

use Illuminate\Support\Facades\Auth;

class Verifier
{
    public function verify($username, $password)
    {
        $credentials = [
            'email'    => $username,
            'password' => $password,
        ];

        if (Auth::once($credentials)) {
            return Auth::user()->id;
        }

        return false;
    }
}