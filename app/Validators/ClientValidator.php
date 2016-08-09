<?php
/**
 * Created by PhpStorm.
 * User: tarobinha
 * Date: 30/04/2016
 * Time: 17:49
 */

namespace SistemaIntegradoIgrejas\Validators;

use Prettus\Validator\LaravelValidator;

class ClientValidator extends LaravelValidator
{
    protected $rules = [
        'nome' => 'required'
    ];
}