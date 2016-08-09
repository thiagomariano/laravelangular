<?php
/**
 * Created by PhpStorm.
 * User: tarobinha
 * Date: 01/05/2016
 * Time: 03:52
 */

namespace SistemaIntegradoIgrejas\Transformers;

use SistemaIntegradoIgrejas\Entities\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{

    public function transform(User $usuario)
    {
        return [
            'id' => $usuario->id,
            'name' => $usuario->name,
            'email' => $usuario->email,
        ];
    }
    
}